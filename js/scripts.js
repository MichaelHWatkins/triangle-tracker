function triangleChecker(side1, side2, side3) {
  if(side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2){
    return "Its not a triangle!"
  } else if (side1 === side2 && side2 === side3) {
    return "Its an Equilateral triangle!"
  } else if (side2 === side1 || side2 === side3 || side1 === side3) {
    return "Its an Isosceles triangle!"
  } else if (!((side1 === side2 && side2 === side3) || (side2 === side1 || side2 === side3 || side1 === side3))) {
    return "Its a Scalene triangle"
  } else {
    return "Its not a triangle!"
  }
}

$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const angle1 = parseInt($("input#side1").val());
    const angle2 = parseInt($("input#side2").val());
    const angle3 = parseInt($("input#side3").val());
    const answer = triangleChecker(angle1, angle2, angle3);
    $("#output1").text(answer);
  });
});