let selectedGoal = "";
let selectedPlan = "R150";

function openLogin(){
  document.getElementById("appModal").classList.add("show");
  showScreen("loginScreen");
  document.body.style.overflow="hidden";
}
function closeModal(){
  document.getElementById("appModal").classList.remove("show");
  document.body.style.overflow="";
}
function showScreen(id){
  document.querySelectorAll(".flow-screen").forEach(x=>x.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
function showGoals(){ showScreen("goalScreen"); }
function selectGoal(goal, el){
  selectedGoal = goal;
  document.querySelectorAll(".goal-card").forEach(x=>x.classList.remove("selected"));
  el.classList.add("selected");
  const c=document.getElementById("goalContinue");
  c.disabled=false; c.classList.remove("disabled");
}
function showFlowPricing(){
  showScreen("flowPricing");
  let recommend = (selectedGoal==="Lose Weight" || selectedGoal==="Cutting") ? "R99" : "R150";
  selectedPlan=recommend;
  document.getElementById("recommendedPlan").textContent=recommend+"/month";
  document.getElementById("p99").classList.remove("selected","recommended");
  document.getElementById("p150").classList.remove("selected","recommended");
  const el=document.getElementById(recommend==="R99"?"p99":"p150");
  el.classList.add("selected","recommended");
}
function choosePlan(plan, el){
  selectedPlan=plan;
  document.querySelectorAll(".mini-price").forEach(x=>x.classList.remove("selected"));
  el.classList.add("selected");
}
function startFlow(plan){
  openLogin();
  selectedPlan=plan;
}
function showPayment(){
  document.getElementById("checkoutPrice").textContent=selectedPlan+"/month";
  showScreen("paymentScreen");
}
function showDashboard(){
  const goal = selectedGoal || "Build Muscle";
  document.getElementById("dashGoal").textContent="Goal: "+goal;
  document.getElementById("communityName").textContent=goal+" Community";
  const workouts={
    "Lose Weight":"Full Body Fat Burn",
    "Build Muscle":"Upper Body Strength",
    "Keep Fit":"Total Body Conditioning",
    "Cutting":"Strength + Cardio Circuit"
  };
  document.getElementById("todayWorkout").textContent=workouts[goal]||"Personalised Workout";
  showScreen("dashboardScreen");
}
function openDemoDashboard(){
  selectedGoal="Build Muscle";
  selectedPlan="R150";
  openLogin();
  showDashboard();
}
document.getElementById("appModal").addEventListener("click", e=>{
  if(e.target.id==="appModal") closeModal();
});
