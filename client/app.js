// function getBathValue() {
//   var uiBath = document.getElementById("uiBath");
//   for(var i   in uiBath){
//     if(uiBath[i].checked){
//         return parseInt(i)+1;}
//   }
//   return -1;
// }

// function getBHKValue() {
//   var uiBHK = document.getElementById("uiBHK");
//   for(var i   in uiBHK){
//       if(uiBHK[i].checked){
//           return parseInt(i)+1;}
//   }
//   return -1;
// }

// function onClickedEstimatePrice() {
//   console.log("Estimate price button clicked");
//   var sqft = document.getElementById("uiSqft").value;
//   var bhk = getBHKValue();
//   var bath = getBathValue();
//   var location = document.getElementById("uiLocations").value;
//   var estPrice = document.getElementById("uiEstimatedPrice");

//   var url = "http://127.0.0.1:5000/predict_home_price"; // Flask API

// //   fetch(url, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({
// //       total_sqft: sqft,
// //       bhk: bhk,
// //       bath: bath,
// //       location: location
// //     }),
// //   })
// //   .then(response => response.json())
// //   .then(data => {
// //     estPrice.innerHTML = "<h2>Estimated Price: ₹" + data.estimated_price.toString() + " Lakhs</h2>";
// //   });
// // }
// $.post(url, {
//     total_sqft: sqft,
//     bhk: bhk,
//     bath: bath,
//     location: location.value
//     },function(data, status) {
//         console.log(data.estimated_price);
//         estPrice.innerHTML = "<h2>Estimated Price: ₹" + data.estimated_price.toString() + " Lakhs</h2>";
//     });

// function onPageLoad() {
//   console.log("Document loaded");
//   var url = "http://127.0.0.1:5000/get_location_names"; // Flask API
// //   fetch(url)
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log("Received locations:", data);
// //     if (data) {
// //       var locations = data.locations;
// //       var uiLocations = document.getElementById("uiLocations");
// //       uiLocations.innerHTML = "";
// //       for (var i in locations) {
// //         var opt = new Option(locations[i]);
// //         uiLocations.appendChild(opt);
// //       }
// //     }
// //   });
// // }
//     $.get(url,function(data, status) {
//         console.log("Received locations:", data);
//         if(data) {
//             var locations = data.locations;
//             var uiLocations = document.getElementById("uiLocations");
//             $(' #uiLocations').empty();
//             for(var i in locations) {
//                 var opt = new Option(locations[i]);
//                 $('#uiLocations').append(opt);
//             }
//         }
//     });
// }
// window.onload = onPageLoad;
// 🛠 Get numeric input values
// function getBathValue() {
//   const uiBath = document.getElementById("uiBath");
//   return parseInt(uiBath.value);
// }

// function getBHKValue() {
//   const uiBHK = document.getElementById("uiBHK");
//   return parseInt(uiBHK.value);
// }

// // 🚀 Predict Price button click
// async function onClickedEstimatePrice() {
//   console.log("Estimate price button clicked");

//   const sqft = document.getElementById("uiSqft").value;
//   const bhk = getBHKValue();
//   const bath = getBathValue();
//   const location = document.getElementById("uiLocations").value;
//   const estPrice = document.getElementById("uiEstimatedPrice");

//   if (!sqft || !bhk || !bath || !location) {
//     alert("Please fill in all the fields!");
//     return;
//   }

//   const url = "http://127.0.0.1:5000/predict_home_price"; // Flask API

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         total_sqft: sqft,
//         bhk: bhk,
//         bath: bath,
//         location: location,
//       }),
//     });

//     const data = await response.json();
//     console.log("Prediction:", data);

//     estPrice.innerHTML = `<h2>Estimated Price: ₹${data.estimated_price} Lakhs</h2>`;
//   } catch (error) {
//     console.error("Error fetching prediction:", error);
//   }
// }

// // 🌍 Load location dropdown on page load
// async function onPageLoad() {
//   console.log("Document loaded");

//   const url = "http://127.0.0.1:5000/get_location_names"; // Flask API
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data && data.locations) {
//       const uiLocations = document.getElementById("uiLocations");
//       uiLocations.innerHTML = "";

//       data.locations.forEach((loc) => {
//         const opt = new Option(loc);
//         uiLocations.appendChild(opt);
//       });
//     }
//   } catch (error) {
//     console.error("Error loading locations:", error);
//   }
// }

// // 👇 Run when page loads
// window.onload = onPageLoad;
function getBathValue() {
  var uiBath = document.getElementById("uiBath");
  return parseInt(uiBath.value);
}

function getBHKValue() {
  var uiBHK = document.getElementById("uiBHK");
  return parseInt(uiBHK.value);
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked...");

  var sqft = document.getElementById("uiSqft").value;
  var bhk = getBHKValue();
  var bath = getBathValue();
  var location = document.getElementById("uiLocations").value;
  var estPrice = document.getElementById("uiEstimatedPrice");

  // Flask API URL
  var url = "http://127.0.0.1:5000/predict_home_price";

  // Create form data to send as POST body
  var formData = new FormData();
  formData.append("total_sqft", sqft);
  formData.append("bhk", bhk);
  formData.append("bath", bath);
  formData.append("location", location);

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Received response:", data);
      estPrice.innerHTML =
        "<h2>Estimated Price: " + data.estimated_price.toString() + " Lakhs</h2>";
    })
    .catch((error) => {
      console.error("Error fetching prediction:", error);
      estPrice.innerHTML =
        "<h2 style='color:red;'>Error fetching prediction</h2>";
    });
}

function onPageLoad() {
  console.log("Document loaded...");
  var url = "http://127.0.0.1:5000/get_location_names";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Received locations:", data);
      if (data && data.locations) {
        var locations = data.locations;
        var uiLocations = document.getElementById("uiLocations");
        uiLocations.innerHTML = "";
        for (var i in locations) {
          var opt = new Option(locations[i]);
          uiLocations.appendChild(opt);
        }
      }
    })
    .catch((error) => {
      console.error("Error loading locations:", error);
    });
}

window.onload = onPageLoad;
