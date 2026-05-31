function star(n)
{
    for(let i=0;i<n;i++)
    {
        let row='';
        for(let j =0;j<i+1;j++)
        {
            row=row+"*";
        }

        for(let j=0;j<2*(n-i-1);j++)
        {
            row=row+" ";
        }
         for(let j =0;j<i+1;j++)
        {
            row=row+"*";
        }

        console.log(row);
    }
}

star(4);

function stars(n)
{
    for(let i=1;i<n;i++)
    {
        let row='';
        for(let j =0;j<n-i;j++)
        {
            row=row+"*";
        }

        for(let j=0;j<2*i;j++)
        {
            row=row+" ";
        }
         for(let j =0;j<n-i;j++)
        {
            row=row+"*";
        }

        console.log(row);
    }
}

stars(4);


