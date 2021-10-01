let darkStat = 0;

function main() {
    document.querySelector("#darkButton").onclick = (event) => {
        console.log("button");
        if(this.darkStat == 0)
        {
            this.darkStat = 1;
            document.querySelector("#darkButton").innerHTML = "Dark Mode";
            document.body.style.backgroundImage = "linear-gradient(45deg, rgb(1,1,1) 0%,transparent 73%),repeating-linear-gradient(90deg, rgba(127, 127, 127,0.1) 0px, rgba(127, 127, 127,0.1) 1px,transparent 1px, transparent 17px),repeating-linear-gradient(0deg, rgba(127, 127, 127,0.1) 0px, rgba(127, 127, 127,0.1) 1px,transparent 1px, transparent 17px),linear-gradient(0deg, rgb(1,1,1),rgb(1,1,1))";
        }
        else
        {
            this.darkStat = 0;
            document.querySelector("#darkButton").innerHTML = "Darker Mode!";
            document.body.style.backgroundImage = "linear-gradient(45deg, rgb(57,56,56) 0%,transparent 73%),repeating-linear-gradient(90deg, rgba(127, 127, 127,0.1) 0px, rgba(127, 127, 127,0.1) 1px,transparent 1px, transparent 17px),repeating-linear-gradient(0deg, rgba(127, 127, 127,0.1) 0px, rgba(127, 127, 127,0.1) 1px,transparent 1px, transparent 17px),linear-gradient(0deg, rgb(57,56,56),rgb(57,56,56))"
        }
    }
}

if(this.darkStat == 0)
{
    this.darkStat = 1;
    document.querySelector("#darkButton").innerHTML = "Dark Mode";
}
else
{
    this.darkStat = 0;
    document.querySelector("#darkButton").innerHTML = "Darker Mode!";
}

main();