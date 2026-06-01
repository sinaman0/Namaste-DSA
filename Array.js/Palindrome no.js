//to check 121 is palin 121 == 121

function palindrome(n)
{
    let num = n;
    let b = 0;
    while(n>0)
    {
        let a = n%10;
        n = Math.floor(n/10);
        
        b = b*10+a;
    }
 if(num == b)
 {
    return true;
 }
 else{
    return false;
 }
}

let ans = palindrome(121);
console.log(ans);