$('#pyrForm').submit(function(event) {
    event.preventDefault();
    if($('#order-name').val() != "" && $('#order-mobile').val().length >= 10){

        var order_name  = $('#order-name').val();
        var order_email = $('#order-email').val();
        var order_mobile = $('#order-mobile').val();
        var location = $('#order-location').val();
        var requirement = $('#order-your-requirement').val();
        $.post("./src/order_requirement.php", {
                order_name : order_name,
                order_email : order_email,
                order_mobile : order_mobile,
                location : location,
                requirement : requirement
         });
        $('#myModal').modal('show');
        $('#pyrForm').trigger("reset");
        $('#order-requirement').removeClass("collapse in");
        $('#order-requirement').addClass("collapse");
    }
});


$('#sypForm').submit(function(event) {
    event.preventDefault();
    if($('#supplier-name').val() != "" && $('#supplier-mobile').val().length >= 10){
        var supplier_name  = $('#supplier-name').val();
        var supplier_shop_name  = $('#supplier-shop-name').val();
        var supplier_email = $('#supplier-email').val();
        var supplier_mobile = $('#supplier-mobile').val();
        var location = $('#locationTextField2').val();

        $.post("./src/supplier_query.php", {
                supplier_name : supplier_name,
                supplier_shop_name : supplier_shop_name,
                supplier_email : supplier_email,
                supplier_mobile : supplier_mobile,
                location : location
         });
        $('#myModal').modal('show');
        $('#sypForm').trigger("reset");
        $('#supplier-query').removeClass("collapse in");
        $('#supplier-query').addClass("collapse");
    }
});

$('#tmtForm').submit(function(event) {
    event.preventDefault();
    if($('#tmt-mobile').val().length >= 10){
        var tmt_name  = $('#tmt-name').val();
        var tmt_email = $('#tmt-email').val();
        var tmt_mobile = $('#tmt-mobile').val();
        var location = $('#locationTextField3').val();
        var type = "Tmt";

        $.post("../../src/tmt_query.php", {
                tmt_name : tmt_name,
                tmt_email : tmt_email,
                tmt_mobile : tmt_mobile,
                location : location,
                type : type
         });
        $('#tmtForm').trigger("reset");
        $('#tmtMessage').removeClass("hide")
    }
});

$('#cementForm').submit(function(event) {
    event.preventDefault();
    if($('#tmt-mobile').val().length >= 10){
        var tmt_name  = $('#tmt-name').val();
        var tmt_email = $('#tmt-email').val();
        var tmt_mobile = $('#tmt-mobile').val();
        var location = $('#locationTextField3').val();
        var type = "Cement"

        $.post("../../src/tmt_query.php", {
                tmt_name : tmt_name,
                tmt_email : tmt_email,
                tmt_mobile : tmt_mobile,
                location : location,
                type : type
         });
        $('#cementForm').trigger("reset");
        $('#cementMessage').removeClass("hide")
    }
});
