const inclSVG = async (...svgContainerIds) => {
  const fetchPromises = svgContainerIds.map((svgContainerId) => {
    const svgPath = `./assets/svg/${svgContainerId}.svg`;
    return fetch(svgPath)
      .then((response) => response.text())
      .then((svgText) => {
        const svgContainer = document.getElementById(svgContainerId);
        svgContainer.innerHTML = svgText;
      })
      .catch((error) => {
        console.error(`Error fetching SVG for ${svgContainerId}: ${error}`);
      });
  });

  await Promise.all(fetchPromises);
};

// inclSVG("", "");

// mettre dans la funct le nom du svg placer dans le dossier (s'assurer que la div à l'id correspondant au nom du svg
// ex :      <div class="svg-container" id="svgtest4"></div> )
