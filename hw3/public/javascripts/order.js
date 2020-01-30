// Author: David Vargas Puga
function order(){
    //retrieves text from text box and checks for "vegan"
    var notesText = $("#notesText").val();
    var notesLower = notesText.toLowerCase();
    var containsVegan = notesLower.includes("vegan");

    var quantity = document.getElementById("amount");
    
    //if text box contains "vegan", then warning. 
    //if no topping selected, alert customer
    //otherwise, hide order form, thank the customer and show order details
    if(containsVegan){
        alert("Warning: the cheescakes contain dairy.")
    } else if (! document.getElementById("plain").checked && ! document.getElementById("cherry").checked
        && !document.getElementById("choco").checked){
            alert("Please select a topping.")
    } else {
        //hides order form
        $("#quantityTitle").hide();
        $("#options").hide();  
        $("#notes").hide(); 
        $("#orderButton").hide(); 
        $("#thanks").html('Thank you! Your order has been placed:');

        var amountObject = document.getElementById("amount");
        var amountOrdered = amountObject.options[amountObject.selectedIndex].text;
        var typeOrdered;

        //finds topping selected
        if(document.getElementById("plain").checked)
            typeOrdered = " plain ";
        else if (document.getElementById("cherry").checked)
            typeOrdered = " cherry ";
        else if (document.getElementById("choco").checked)
            typeOrdered = " chocolate ";
        var details = amountOrdered.concat(typeOrdered, " cheesecake(s).");
        var notes = "Notes: ".concat(notesText);
        
        //shows the order details and notes
        $("#orderDetails").html(details);
        $("#orderNotes").html(notes);
    }
}