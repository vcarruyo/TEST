function solution(s1, s2) {
   var result = [];
s1=s1.toLowerCase();
s2=s2.toLowerCase();
   if (s2.length <= s1.length) {
       // Construir hash
       var wHash = {}; // Copia Hash a comparar.
       var hash = {}; // Copia hash .
       s2.split('').forEach(function(letter) {
         wHash[letter] = wHash[letter] ? wHash[letter] + 1 : 1;
         hash[letter] = hash[letter] ? hash[letter] + 1 : 1;
       });
       
       var count = 0;
       var index = -1;
       
       for (var i=0; i<s1.length; i++) {
           var letter = s1[i];
           if (hash[letter]) {
               if (index === -1) {
                   index = i;
               }
               
               hash[letter]--;
               count++;
               
               if (count === s2.length) {
                   //Anagrama ya completado
                   result.push(index);
                   
                   //Aqui se hace un rest de las variables
                   hash[s1[index]]++;

                   count = s2.length - 1;
                   index++;
               }
           }
           else {
               // Reseteo de variables
               if (index !== -1 && hash[letter] !== undefined && (s2.length <= s1.length - index)) {
                   // Encontrar primera ocurrencia y poner el punto de inicio de index hacia la letra siguiente.
                   for (var j=index; j<i; j++) {
                       index++;
                       if (s1[j] === letter) {
                           break;
                       }
                       else {
                           hash[s1[j]]++;
                           count--;
                       }
                   }
               }
               else {
                   // Restauracion del hash y el counter
                   var keys = Object.keys(hash);
                   for (var j=0; j<keys.length; j++) {
                       hash[keys[j]] = wHash[keys[j]];
                   }
                   count = 0;
                   index = -1;
               }  
           }
       }
   }
   
   return result.length;
};

</script>

</body>
</html>