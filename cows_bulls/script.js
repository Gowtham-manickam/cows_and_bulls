
let qstn;
function qn()
{
  question = prompt("Enter the Question. Make sure that you are Entering it secretly... ");
  qstn = question;
  validate(question);
  
}
function validate(qn)
{
  if(counter==10)
  {
    let bool = confirm("Sorry you exceed your limit !")
    if(bool)
    {
      window.location.reload();
    }
  }
  ip = document.getElementById('ip').value;
  qnLen = qn.length;
  ipLen = ip.length;
  console.log(qn)
  console.log(ip)
  if(qnLen!=ipLen)
  {
    alert("Please Enter "+qn.length+" letters word")
    if(counter>0)
    {
      counter--;
    }

  }
  qn = qn.toUpperCase();
  ip = ip.toUpperCase();
  console.log(qn);
  console.log(ip);
  if(ip==qn)
  {
    let val = confirm("Bingo you figured it out! Congrats\n want to continue ?")
    if(val)
    {
      window.location.reload(); 
    }
  }
  let b=0;
  let vis=[];
  for(i=0;i<qnLen;i++)
  {
    vis.push(true);
  }
  for(i=0;i<qnLen;i++)
  {
    if(qn.charAt(i)==ip.charAt(i))
    {
      b++;
      vis[i]=false;
    }
  }
  console.log(vis);
  let mySet = new Set();

  for(i=0;i<ipLen;i++)
  {
    mySet.add(qn[i])
  }
  let c = 0;
  for(i=0;i<ipLen;i++)
  {
    if(vis[i])
    {
      if(mySet.has(ip[i]))
      {
        c++;
        vis[i] = false;
      }
    }
  }
  let fin = b+"B"+c+"C";
  console.log(fin);;
  document.getElementById('opt').innerHTML = fin;
  let txt = document.querySelector('#help');
  document.querySelector('#help').innerHTML += "<br>"+ip+"->"+fin;

}
let counter=0;
function trigger()
{
  validate(qstn);
  counter++;
}

function tips()
{
  alert("Tips\nB - Exact position exact letter.\nC - Exact Letter but different position.")
}