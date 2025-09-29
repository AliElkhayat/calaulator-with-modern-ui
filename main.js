const Result = document.getElementById("Result")

function appendToOperation(input) {
   Result.value += input
   console.log(Result.value)
}
function clearResult() {
   Result.value = ""

}
function calculateResult() {
   try {
      Result.value = eval(Result.value)

   } catch (error) {
      Result.value = "error"

   }
  


}
function deleteLastValue() {
   const lastValue = Result.value
   Result.value = lastValue.substring(0, lastValue.length - 1)
   console.log(Result.value)

}



