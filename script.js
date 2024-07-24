const branches = [
  {
    name: "Adalbertstraße 14",
    location: " 52062 Aachen",
    contact: "+4924146310900",
    imageUrl: "./assets/13.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/m3ardTBw8nGLzEQK8",
    position: { lat: 50.77524551419045, lng: 6.088436721326077 },
  },
  {
    name: "Ettlinger-Tor-Platz 1",
    location: "76133 Karlsruhe",
    contact: "+4972156862238",
    imageUrl: "./assets/14.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/R8R9iJNWiCLSyFqG6",
    position: { lat: 49.00625189099226, lng: 8.403129380719758 },
  },
  {
    name: "Centroallee 203",
    location: "46047 Oberhausen",
    contact: "+492084373624",
    imageUrl: "./assets/15.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/tgkep4eji38aEysG6",
    position: { lat: 51.49106741589803, lng: 6.880296182740045 },
  },
  {
    name: "Pasinger Bahnhofspl. 5",
    location: "81241 München",
    contact: "+498982072790",
    imageUrl: "./assets/16.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/MJuWTfLutkj9fAKQ9",
    position: { lat: 48.14848454594875, lng: 11.463968853672524 },
  },
  {
    name: "Rhein-Neckar-Zentrum",
    location: "68519 Viernheim",
    contact: "+494025777843",
    imageUrl: "./assets/17.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/hvqJ4V6aegsXQvi17",
    position: { lat: 49.526353960739165, lng: 8.56262585376678 },
  },
  {
    name: "Hamburger Str. 27",
    location: "22083 Hamburg",
    contact: "+494018122727",
    imageUrl: "./assets/18.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/SPEsgPNRwRLJvwQVA",
    position: { lat: 53.57398255653246, lng: 10.03211022847361 },
  },
  {
    name: "Hans-Bredow-Straße 19",
    location: "28307 Bremen",
    contact: "+4942157733000",
    imageUrl: "./assets/19.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/QwkA2pVgtkJGYMo5A",
    position: { lat: 53.04873866507259, lng: 8.958126327028511 },
  },
  {
    name: "Limbecker Platz 1A",
    location: "45127 Essen",
    contact: "+492013797818",
    imageUrl: "./assets/20.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/ZCdhWk57cajdoFWD8",
    position: { lat: 51.45807351208204, lng: 7.005148380891308 },
  },
  {
    name: "Stubengasse 33",
    location: "48143 Münster",
    contact: "+4925148820818",
    imageUrl: "./assets/21.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/efnVyYbx2Y2RBjcS8",
    position: { lat: 51.96003687958269, lng: 7.629643668458132 },
  },
  {
    name: "Am Forum 1/Shop 1.35a",
    location: "35576 Wetzlar",
    contact: "+4964412047876",
    imageUrl: "./assets/22.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/ZXesyLbFRTo624nT8",
    position: { lat: 50.564597057573685, lng: 8.504589015202441 },
  },
  {
    name: "Damm 12",
    location: "38100 Braunschweig",
    contact: "+4953148039986",
    imageUrl: "./assets/23.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/BxNzRX68hUYbPjqT6",
    position: { lat: 52.26257320253297, lng: 10.523469386488202 },
  },
  {
    name: "Am Einkaufszentrum 1",
    location: "44791 Bochum",
    contact: "+4923453051701",
    imageUrl: "./assets/24.jpg",
    time: "Mon-Fri 10am - 7am",
    sunday: "Sun- Closed",
    mapPin: "https://maps.app.goo.gl/d9KFvT4NADCYc17s8",
    position: { lat: 51.4954786056569, lng: 7.282918434301941 },
  },
];

function createBranchCards(branchData) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  branchData.forEach((branch) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
              <picture>
              <source media="(min-width:1024px)" srcset=${branch.imageUrl}>
              <img class="card-image" src=${branch.imageUrl} alt="blog"/>
              </picture>
               <div class="card-content">
                <div class="card-title">${branch.name}</div>
                <div class="card-location">${branch.location} </div>
                <div class='card_contact1' > T:  <span class='card_contact'>${branch.contact}<span> </div>
                <div class='card-time'>${branch.time} </div>
                <div class='card-sun'> Sun - ${branch.sunday}</div> 
                <div class="card-actions">
                <a href="${branch.mapPin}">Get Directions</a>
                </div>
            </div>
        `;

    cardContainer.appendChild(card);
  });
}

function loadBranches() {
  createBranchCards(branches);
}
window.onload = loadBranches();
var filteredBranches;
document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
   filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchTerm) ||
      branch.location.toLowerCase().includes(searchTerm) ||
      branch.contact.toLowerCase().includes(searchTerm)
  );
  createBranchCards(filteredBranches);
  // console.log(filteredBranches, "in search");
});




window.onload = function () {
  loadBranches();
  initMap();
  // console.log(filteredBranches, "in doc");

  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase().trim();
    if (searchTerm === "") {
      clearSuggestions(); // Clear suggestions when the search input is empty
    } else {
      const filteredBranches = branches.filter(
        (branch) =>
          branch.name.toLowerCase().includes(searchTerm) ||
          branch.location.toLowerCase().includes(searchTerm) ||
          branch.contact.toLowerCase().includes(searchTerm)
      );
      displaySuggestions(filteredBranches);
    }
  });

  function displaySuggestions(branchList) {
    const suggestionsContainer = document.getElementById("suggestions");
    suggestionsContainer.innerHTML = "";

    branchList.forEach((branch) => {
      const suggestion = document.createElement("div");
      suggestion.textContent = `${branch.name}, ${branch.location}`;
      suggestion.classList.add("suggestion");

      suggestion.addEventListener("click", function () {
        searchInput.value = branch.name;
        handleCardClick(branch);
        clearSuggestions(); // Clear suggestions after selecting a branch
      });

      suggestionsContainer.appendChild(suggestion);
    });
  }

  function clearSuggestions() {
    const suggestionsContainer = document.getElementById("suggestions");
    suggestionsContainer.innerHTML = "";
  }
};
















let map;
function handleCardClick(branch) {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: branch.position,
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: isExpanded,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER,
    },
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
  });

  const expandButton = document.getElementById("expandButton");
  expandButton.addEventListener("click", () => {
    map.setOptions({zoomControl: isExpanded});
  });

  // console.log(branch)
  document.getElementById("searchInput").value = `${branch.name}`;
  // console.log(document.getElementById("searchInput").value)
  createBranchCards([branch]);
  const marker = new google.maps.Marker({
    position: branch.position,
    map: map,
    title: branch.name,
    icon: {
      url: "./assets/logo.png",
      scaledSize: new google.maps.Size(35, 35),
    },
  });

  const infowindowContent = document.createElement("div");
  infowindowContent.innerHTML = `
    <div>
    <strong><p>Tom Tailer <br> ${branch.name}</p></strong>
      <p>${branch.location}</p>
    </div>
  `;

  const infowindow = new google.maps.InfoWindow({
    content: infowindowContent,
    autoPan: false,
  });

  infowindow.addListener("closeclick", () => {
    document.getElementById("searchInput").value = "";
    loadBranches();
    initMap();
  });

  infowindow.open(map, marker);
  map.setCenter(marker.getPosition());
}

// var map;

const suggestionsContainer = document.getElementById("suggestions");

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission or other default behavior

    // If suggestions are visible, select the first suggestion
    const firstSuggestion = suggestionsContainer.querySelector(".suggestion");
    if (firstSuggestion) {
      firstSuggestion.click(); // Simulate a click on the first suggestion
      console.log("entered");
    }
  }
});

const searchIcon = document.querySelector(".feather");
searchIcon.addEventListener("click", function () {
  console.log("clicked");
  // If suggestions are visible, select the first suggestion
  const firstSuggestion = suggestionsContainer.querySelector(".suggestion");
  if (firstSuggestion) {
    firstSuggestion.click(); // Simulate a click on the first suggestion
  }
});

const ticker = document.getElementById("ticker");
const contents = document.querySelectorAll(".ticker-content");
let isPaused = false;

let contentWidth = 0;
setTimeout(() => {
  contents.forEach((content) => {
    contentWidth += content.clientWidth;
    let cloneContent = ticker.innerHTML;
    ticker.innerHTML += cloneContent;
  });
}, 2000);

function startTicker() {
  const tickerAnimation = () => {
    if (!isPaused) {
      ticker.scrollLeft += 2;
      if (ticker.scrollLeft >= contentWidth) {
        ticker.scrollLeft -= contentWidth;
      }
    }
  };
  setInterval(tickerAnimation, 20);
}

// startTicker();

ticker.addEventListener("mouseover", () => {
  isPaused = true;
});

ticker.addEventListener("mouseout", () => {
  isPaused = false;
});

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.526353960739165, lng: 8.56262585376678 },
    zoom: 5,
    disableDefaultUI: true,
    zoomControl: false,
    fullscreenControl: false,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER,
    },
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
  });
  const ZOOM_LEVEL_ON_CLICK = 14;

  branches.forEach((branch) => {
    const marker = new google.maps.Marker({
      position: branch.position,
      map: map,
      title: branch.name,
      icon: {
        url: "./assets/logo.png",
        scaledSize: new google.maps.Size(40, 40),
      },
    });

    const infowindowContent = document.createElement("div");

    infowindowContent.innerHTML = `
    <div>
      <strong><p>Tom Tailer <br>${branch.name}<p></strong>
      <p>${branch.location}</p>
    </div>
  `;

    const infowindow = new google.maps.InfoWindow({
      content: infowindowContent,
      AutoPan: false,
    });

    infowindow.addListener("closeclick", () => {
      document.getElementById("searchInput").value = "";
      initMap();
      loadBranches();
    });

    const expandButton = document.getElementById("expandButton");


    expandButton.addEventListener("click", () => {
      const cardContainer = document.getElementById("cardContainer");
      const currentOffset = parseInt(cardContainer.style.marginTop) || 0;
      if (!isExpanded) {
        // adjustCardPositionAndButton(-120);
        isExpanded = true;
      map.setOptions({zoomControl: true});

      } else {
        // adjustCardPositionAndButton(-52);
        isExpanded = false;
      map.setOptions({zoomControl: false});

      }
    });


    marker.addListener("click", () => {
      // console.log("yoo", marker.title);
      var searchInput = document.getElementById("searchInput");
      searchInput.value = marker.title;
      var inputEvent = new Event("input");
      searchInput.dispatchEvent(inputEvent);
      infowindow.open(map, marker);
      map.setZoom(ZOOM_LEVEL_ON_CLICK);
      map.setCenter(marker.getPosition());
    });

    searchInput.addEventListener("input", () => {
      if (searchInput.value === "") {
        refreshMapWithAllBranches();
      }
    });
  });
}
function refreshMapWithAllBranches() {
  markers.forEach((marker) => {
    marker.setMap(null);
  });

  branches.forEach((branch) => {
    createMarker(branch);
  });
}





function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}
let isExpanded = false;
let initialHeight = document.getElementById("map").clientHeight;
let expandedHeight = window.innerHeight * 0.60;

expandButton.addEventListener("click", () => {
  const mapContainer = document.getElementById("map");
  let targetHeight = !isExpanded ? expandedHeight : initialHeight;
  let currentHeight = mapContainer.clientHeight;
  let step = (targetHeight - currentHeight) / 50;

  let intervalId = setInterval(() => {
    currentHeight += step;
    if ((step > 0 && currentHeight >= targetHeight) || (step < 0 && currentHeight <= targetHeight)) {
      currentHeight = targetHeight;
      clearInterval(intervalId);
    }
    mapContainer.style.height = `${currentHeight}px`;
  }, 1);

  expandButton.textContent = isExpanded ? "Expand" : "Collapse";

  isExpanded = !isExpanded; // Toggle the isExpanded state
});
function preloadImages() {
  const images = document.querySelectorAll(".image-container img");
  let loadedImages = 0;
  console.log("loading");
  images.forEach((image) => {
    if (image.complete) {
      loadedImages++;
      // console.log( loadedImages)
    } else {
      image.addEventListener("load", () => {
        loadedImages++;
        if (loadedImages === images.length) {
          startTicker();
        }
      });
      image.addEventListener("error", () => {
        // Handle image loading errors if needed
        loadedImages++; // Increment loadedImages even on error to ensure proper behavior
        if (loadedImages === images.length) {
          startTicker();
        }
      });
    }
  });

  if (loadedImages === images.length) {
    startTicker();
  }
}

// Call the preload function before starting the ticker
preloadImages();



// window.addEventListener('scroll', function() {
//   var header = document.querySelector('header');
//   var navigation = document.querySelector('.page-navigation');
  
//   var headerHeight = header.offsetHeight +115;

//   if (window.innerWidth <= 768) { // 768px is a common breakpoint for mobile devices
//     navigation.style.top = '9vh'; // Always 9vh from the top on mobile devices
//   } else if (window.pageYOffset > headerHeight) {
//     navigation.style.top = '9vh'; // 9vh from the top when scrolled on non-mobile devices
//   } else if (window.pageYOffset === 0) {
//     navigation.style.top = '14vh'; // 14vh from the top when at the top of the page on non-mobile devices
//   } else {
//     navigation.style.top = '14vh'; // 14vh from the top initially on non-mobile devices
//   }
// });
// var menuButton = document.querySelector('.navbar-toggler');

// menuButton.addEventListener('click', function() {
//   if (this.classList.contains('close')) {
//     isPaused = false;
//     // console.log('clicked close');
//   } else {
//     isPaused = true;
//     // console.log('clicked open');
//   }
// });


function scrollToSection(event, sectionId){
  event.preventDefault();
  
  var section = document.querySelector(sectionId);
  var offset = window.innerWidth <= 768 ? 135 : 180; // Adjust the values as needed
  var position = section.offsetTop - offset;
  
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });

  // Change the color of the clicked link
  var navLinks = document.querySelectorAll('.page-nav-link');
  navLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  event.target.classList.add('active');
}

window.addEventListener('scroll', () => {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.page-nav-link');

  sections.forEach((section) => {
    var rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      if (section.id === 'stores') {
        navLinks[0].classList.add('active');
        navLinks[1].classList.remove('active');
      } else if (section.id === 'storeLocator') {
        navLinks[0].classList.remove('active');
        navLinks[1].classList.add('active');
      }
    }
  });
});