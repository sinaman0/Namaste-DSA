function count(n)
{
    let cnt = 0;
    if(n==0)
    {
        return 1;
    }
    n=Math.abs(n);
while(n>0)
{
    cnt++;
     n = Math.floor(n / 10);
}
return cnt;
}

let cnt =count(-253);
console.log(cnt);