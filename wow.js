const elLink = document.createElement("link");
elLink.id = "map-css-link";
elLink.rel = "stylesheet";
elLink.href = "https://unpkg.com/leaflet@1.8.0/dist/leaflet.css";
elLink.integrity = "sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==";
elLink.crossOrigin = "anonymous";
document.head.appendChild(elLink);

const elScript = document.createElement("script");
elLink.id = "map-css-script";
elScript.src = "https://unpkg.com/leaflet@1.8.0/dist/leaflet.js";
elScript.integrity = "sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ==";
elScript.crossOrigin = "anonymous";
elScript.onload = function () {
  let elMap = document.getElementById("map");
  elMap.style.height = "300px";

  var L = window.L;

  var objMap = L.map("map").setView([20.1109, 8.6821], 1.3);
  //var objMap = L.map('map').setView([50.1109, 8.6821], 7);

  var cartodbAttribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>';

  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=dddb11b6-9c51-4889-b91f-506a0d659178",
    // 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    { attribution: cartodbAttribution }
  ).addTo(objMap);

  let arrDcLocations = [
    {
      coord: [33.74, -84.38],
      opt: {
        title: "Atlanta [USE]",
        desc: "Lots of information... Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum",
      },
    },
    {
      coord: [38.58, -121.494],
      opt: {
        title: "Sacramento [USW]",
        desc: "Lots of information... Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum",
      },
    },
    {
      coord: [50.1109, 8.6821],
      opt: {
        title: "Frankfurt [EUC]",
        desc: "Lots of information... Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum",
        riseOnHover: true,
      },
    },
    {
      coord: [53.3498, -6.2603],
      opt: {
        title: "Dublin [EUW]",
        desc: "Lots of information... Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum",
      },
    },
    {
      coord: [19.076, 72.8777],
      opt: {
        title: "Mumbai [AP]",
        desc: "Lots of information... Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum",
      },
    },
    {
      coord: [-33.8688, 151.2093],
      opt: {
        title: "Sydney [APS]",
        desc: "Lots of information... Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum Ipsum lorum",
      },
    },
  ];

  let tmpMark = "";
  for (const objMarker of arrDcLocations) {
    tmpMark = L.marker(objMarker.coord, objMarker.opt).addTo(objMap);
    tmpMark.bindPopup(objMarker.opt.desc);
    tmpMark.on("mouseover", customTip);
    tmpMark.on("click", customPop);

    var icon = tmpMark.options.icon;
    // console.log(icon.options.shadowSize)
    icon.options.iconSize = [15, 24];
    icon.options.shadowSize = [24, 24];
    icon.options.iconAnchor = [8, 22]; // point of the icon which will correspond to marker's location
    icon.options.shadowAnchor = [8, 22]; // the same for the shadow
    tmpMark.setIcon(icon);
  }

  function customTip(e) {
    // console.log(e.target.options)
    this.unbindTooltip();
    if (!this.isPopupOpen()) {
      this.bindTooltip(e.target.options.title).openTooltip();
    }
  }

  function customPop() {
    this.unbindTooltip();
  }
};

document.head.appendChild(elScript);
