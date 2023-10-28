import React, { useEffect } from "react";
import * as d3 from "d3";

function D3gallery() {
  //useEffect hook to render the D3 gallery
  useEffect(() => {
    //select the div with the id "d3gallery"
    const d3gallery = d3.select("#d3gallery");

    //append a div to the d3gallery div
    const svg = d3gallery.append("svg");

    //set the width and height of the svg
    svg.attr("width", 500).attr("height", 500);

    //append a circle to the svg
    svg
      .append("circle")
      .attr("cx", 250)
      .attr("cy", 250)
      .attr("r", 50)
      .attr("fill", "red");
  }, []);

  //return the div with the id "d3gallery"
  return <div id="d3gallery"></div>;
}

export default D3gallery;
