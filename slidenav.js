

// const ajax_get = (url, callback) => {
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             console.log('responseText:' + xmlhttp.responseText);
//             try {
//                 var data = JSON.parse(xmlhttp.responseText);
//             } catch(err) {
//                 console.log(err.message + " in " + xmlhttp.responseText);
//                 return;
//             }
//             callback(data);
//         }
//     };
 
//     xmlhttp.open("GET", "slidenav.json", true);
//     xmlhttp.send();
// }
 
// ajax_get('slidenav.json', function(data) {
//     let itemWidth = (100/data.cities.length).toFixed(2);
//     let activeIndex = 0;
//     let scroller = document.getElementsByClassName('scroller')[0];
//     data.cities.forEach((name, index)=> {
//       let li = document.createElement('Div');
//       li.innerHTML = name.label;
//       li.style.width = `${itemWidth}%`;
//       li.activeIndex = index;
//       li.onclick = (event, index)=> {
//         activeIndex = event.target.activeIndex;
//         console.log(activeIndex)
//         document.querySelectorAll('.nav-items div').forEach((listItem, index)=> {
//             listItem.classList.remove('active');
//         })
//         event.target.classList.add('active');
//         scroller.style.width = `${itemWidth}%`;
//         scroller.style.marginLeft = `${itemWidth * activeIndex}%`;
//       };
//       document.getElementById('myList').appendChild(li);
//     });
//     scroller.style.width = `${itemWidth}%`;
//     scroller.style.marginLeft = `${itemWidth * activeIndex}%`;
  
// });

// The above part is somehow not working. I tried to fetch the json data through ajax 
// and using XMLHttpRequest object. But it can also be done using ES6 'import' through
// npm library like fs or if we create a server through node and then fetch the data 
// through server it can be done in that way too.




// So I just took the mock data from json file and tried to implement the functionality 
// as close as possible


let countryList = {
    "cities": [
      {
        "section": "cupertino",
        "label": "Cupertino"
      },
      {
        "section": "new-york-city",
        "label": "New York City"
      },
      {
        "section": "london",
        "label": "London"
      },
      {
        "section": "amsterdam",
        "label": "Amsterdam"
      },
      {
        "section": "tokyo",
        "label": "Tokyo"
      },
      {
        "section": "hong-kong",
        "label": "Hong Kong"
      },
      {
        "section": "sydney",
        "label": "Sydney"
      }
    ]
  };


window.onload = () => {
    let itemWidth = (100/countryList.cities.length).toFixed(2);
    let activeIndex = 0;
    let scroller = document.getElementsByClassName('scroller')[0];
    countryList.cities.forEach((name, index)=> {
      let li = document.createElement('Div');
      li.innerHTML = name.label;
      li.style.width = `${itemWidth}%`;
      li.activeIndex = index;
      li.onclick = (event, index)=> {
        activeIndex = event.target.activeIndex;
        console.log(activeIndex)
        document.querySelectorAll('.nav-items div').forEach((listItem, index)=> {
            listItem.classList.remove('active');
        })
        event.target.classList.add('active');
        scroller.style.width = `${itemWidth}%`;
        scroller.style.marginLeft = `${itemWidth * activeIndex}%`;
      };
      document.getElementById('myList').appendChild(li);
    });
    scroller.style.width = `${itemWidth}%`;
    scroller.style.marginLeft = `${itemWidth * activeIndex}%`;
  
  };
