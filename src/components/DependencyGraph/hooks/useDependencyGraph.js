import { useEffect, useState } from "react";
import { randomColor } from "randomcolor";
import axios from "axios";

import { timer } from "../../../utils";

const TIMER_MS = 300;

function useDependencyGraph(packageName) {
  const [graph, setGraph] = useState({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    loadDependencies(packageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageName]);

  // Dependencies setup
  const loadDependencies = async (packageName) => {
    try {
      const initialPackage = {
        id: packageName,
        label: packageName,
        title: packageName,
      };
      const nodes = [initialPackage];
      const edges = new Set();
      const queue = [packageName];
      const visited = new Set();

      while (queue.length > 0) {
        setLoading(true);
        setProgress(queue.length);
        const queueItem = queue.shift();
        const { parent, children } = await fetchDepedencies(queueItem);

        // Update visited
        visited.add(parent);

        // For each child dependency found
        children.forEach((child) => {
          const node = {
            id: child,
            label: child,
            title: child,
            color: randomColor(),
          };

          const edge = {
            from: parent,
            to: child,
          };

          // Update edges
          edges.add(edge);

          // Unless already visited
          if (!visited.has(child)) {
            queue.push(child); // Push package to the queue
            nodes.push(node); // Push node obj to nodes
            visited.add(child); // Add to visited set
          }
        });
      }
      // Build graph from results
      setGraph({
        nodes: nodes,
        edges: [...edges], // Set to Array using ES6 spread operator syntax
      });

      setLoading(false);
    } catch (error) {
      setError(true);
      setErrorMsg(
        "We cannot fetch the dependencies data. Please try again later."
      );
      setLoading(false);
    }
  };

  // API call
  const fetchDepedencies = async (packageName) => {
    try {
      const response = await axios(`${url}/${packageName}`);
      // Get latest version from response » data » dist-tags » latest
      const version =
        response.data &&
        Object.entries(response.data)
          .map(([key, value]) => (key === "dist-tags" ? value.latest : null))
          .filter((item) => item !== null)
          .toString();

      // Get latest version details from response » versions
      const data =
        response.data &&
        Object.entries(response.data.versions).filter(
          ([key, value]) => key === version
        )[0][1];

      let dependenciesArr = [];
      // Loop over the dependencies object
      data.dependencies &&
        Object.entries(data.dependencies).map(([key, value]) => {
          dependenciesArr.push(key);
          return null;
        });

      const results = {
        parent: packageName,
        children: dependenciesArr,
      };

      // Wait "TIMER_MS" second between API calls
      await timer(TIMER_MS);
      return results;
    } catch (error) {
      setError(true);
      setErrorMsg(
        "We cannot fetch the dependencies data. Please try again later."
      );
      setLoading(false);
    }
  };

  return {
    loading,
    progress,
    error,
    errorMsg,
    graph,
  };
}

export default useDependencyGraph;
