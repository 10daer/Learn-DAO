let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]


let stageEl = document.getElementById("stage")
let PickfighterEl = document.getElementById("btn")

PickfighterEl.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let fighter1 = fighters[Math.floor(Math.random() * fighters.length)]; 
    let fighter2 = fighters[Math.floor(Math.random() * fighters.length)];
    let fight = fighter1+" VS "+fighter2;
    stageEl.textContent = fight
    
})

