Solution1.js
// complete the function
function vowelsAndConsonants(s) {
 var c= "";

for (var i = 0 ; i<s.length;i++)
  {
     if (s.charAt(i)==='a' || s.charAt(i)==='e'|| s.charAt(i)==='i' ||
         s.charAt(i)==='o' || s.charAt(i)==='u')
      {
         console.log(s.charAt(i));
      }
    else {
      c = c + s.charAt(i);
      }
  }
for (var i=0;i<c.length;i++)
{
  console.log(c.charAt(i));
}
}
