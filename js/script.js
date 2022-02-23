$("#zero").click(function() {
    var zero = $(this).val()
    var output = $("#display").val()
    output = output + zero
    $("#display").val(output)
})
$("#one").click(function() {
    var one = $(this).val()
    var output = $("#display").val()
    output = output + one
    $("#display").val(output)

})
$("#two").click(function() {
    var two = $(this).val()
    var output = $("#display").val()
    output = output + two
    $("#display").val(output)
})
$("#three").click(function() {
    var three = $(this).val()
    var output = $("#display").val()
    output = output + three
    $("#display").val(output)
})
$("#four").click(function() {
    var four = $(this).val()
    var output = $("#display").val()
    output = output + four
    $("#display").val(output)
})
$("#fife").click(function() {
    var fife = $(this).val()
    var output = $("#display").val()
    output = output + fife
    $("#display").val(output)
})
$("#six").click(function() {
    var six = $(this).val()
    var output = $("#display").val()
    output = output + six
    $("#display").val(output)
})
$("#seven").click(function() {
    var seven = $(this).val()
    var output = $("#display").val()
    output = output + seven
    $("#display").val(output)
})
$("#eight").click(function() {
    var eight = $(this).val()
    var output = $("#display").val()
    output = output + eight
    $("#display").val(output)
})
$("#nine").click(function() {
    var nine = $(this).val()
    var output = $("#display").val()
    output = output + nine
    $("#display").val(output)
})
$("#sum").click(function() {
    var sum = $(this).val()
    var output = $("#display").val()
    output = output + sum
    $("#display").val(output)
})
$("#sub").click(function() {
    var sub = $(this).val()
    var output = $("#display").val()
    output = output + sub
    $("#display").val(output)
})
$("#multi").click(function() {
    var multi = $(this).val()
    var output = $("#display").val()
    output = output + multi
    $("#display").val(output)
})
$("#divide").click(function() {
    var divide = $(this).val()
    var output = $("#display").val()
    output = output + divide
    $("#display").val(output)
})
$("#dot").click(function() {
    var dot = $(this).val()
    var output = $("#display").val()
    output = output + dot
    $("#display").val(output)
})
$('#clear').click(function() {
    $("#display").val("")
})
$("#equal").click(function() {
    var output = $("#display").val()
    if (output == '') {
        alert("please enter number")
    } else {
        $("#display").val(eval($("#display").val()))
            // var output = $("#display").val(result)
            // alert(output)
    }
})