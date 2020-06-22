var lease = (cost = 4500, months = 12 ) => cost*months;

console.log("Lease for 10months with 5000/month: "+lease(5000,10));
console.log("default Lease for 87months: "+lease(undefined,87));
console.log("Lease with 10000/month: "+lease(10000));