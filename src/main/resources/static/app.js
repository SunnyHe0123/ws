var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);

    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }

    $("#greetings").html("");
}

function connect() {
    //URL需要连接的地址
    var socket = new SockJS('/websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({name: $("#name").val()}, function (frame) {
        setConnected(true);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage() {
    stompClient.send("/app/hello", {},
        JSON.stringify({'name': $("#name").val(),
        "message" :  $("#message").val()}));
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("#connect").click(function() {
        connect();
    });
    $( "#disconnect" ).click(function() {
        disconnect();
    });
    $("#send").click(function() {
        sendMessage();
    });
});
