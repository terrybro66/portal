import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Tube = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);

    svg
      .append("image")
      .attr("xlink:href", "circle.jpeg")
      .attr("width", "100%")
      .attr("height", "100%");

    fetch("circle.json")
      .then((response) => response.json())
      .then((data) => {
        const line = d3
          .line()
          .x((d) => d.x)
          .y((d) => d.y);

        svg
          .append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "yellow")
          .attr("stroke-width", 7)
          .attr("d", line);

        const pointsWithConnections = data.filter(
          (d) => d.connections && d.connections.length > 0
        );
        const pointsWithoutConnections = data.filter(
          (d) => !d.connections || d.connections.length === 0
        );

        svg
          .selectAll(".point-with-connections")
          .data(pointsWithConnections)
          .enter()
          .append("circle")
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y)
          .attr("r", 10)
          .attr("fill", "red");

        svg
          .selectAll(".point-without-connections")
          .data(pointsWithoutConnections)
          .enter()
          .append("rect")
          .attr("x", (d) => d.x - 5)
          .attr("y", (d) => d.y - 5)
          .attr("width", 10)
          .attr("height", 10)
          .attr("fill", "green");
      });
  }, []);

  return <svg ref={ref} width={600} height={400} />;
};

export default Tube;
