
function getModifiedArray(array) {
//    const start = 'Start'
//    const end = arr[arr.length - 1];
   
   const arr = [...array];
   arr[0] = 'Start';
   arr[arr.length - 1] = 'End';
   return arr

   
 }

 console.log(getModifiedArray([12, 6, 22, 0, -8])); 