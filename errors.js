var array1 = ["Android", "IOS", "Symbian", "Blackberry", "Windows"];
try {
    for (var i = 0; i <= 7; i++) {
        if (i >= array1.length) throw new Error("Array out of bounds");
        console.log(array1[i]);
    }
} catch (err) {
    console.log(err);
}