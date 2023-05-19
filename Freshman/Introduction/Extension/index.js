let myLeads = [];
const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("save-btn");
const buttonDel = document.getElementById("del-btn");
const saveEl = document.getElementById("save-tab")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

function render(list) {
    let listItems = "";
    for (let i=list.length - 1; i >= 0; i--) {
        listItems +=  `
        <li>
            <a target='_blank' href='${list[i]}'>
                ${list[i]}
            </a>
        </li>
    `}
    ulEl.innerHTML = listItems;
}

buttonEl.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

buttonDel.addEventListener("click", function() {
    //localStorage.removeItem("myLeads[recent]")
    myLeads.pop(myLeads[0])
    render(myLeads)
})

// Listen for double clicks on the delete button
// When clicked, clear localStorage, myLeads, and the DOM
buttonDel.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// 2. Listen for clicks on tabBtn and Save the url 
saveEl.addEventListener("click", function() {
    // Grab the URL of the current tab!
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // since only one tab should be active and is in the current window at once
        // the return variable should only have one entry
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
