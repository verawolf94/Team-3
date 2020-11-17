document.getElementById("TaiwanID").addEventListener("click", displayTaiwan);
document.getElementById("HawaiiID").addEventListener("click", displayHawaii);
document.getElementById("JamaicaID").addEventListener("click", displayJamaica);

function displayTaiwan()
{
  document.getElementById("articleID").innerHTML="<div id=\"Taiwan\"><h3>Taiwan</h3><p>Here is where my paragraph lies</p></div>"
}

function displayHawaii()
{
  document.getElementById("articleID").innerHTML="<div id=\"Hawaii\"><h3>Hawaii</h3><p>Here is where my paragraph lies</p></div>"
}

function displayJamaica()
{
  document.getElementById("articleID").innerHTML="<div id=\"Jamaica\"><h3>Jamaica</h3><p>Here is where my paragraph lies</p></div>"
}