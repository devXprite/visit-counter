const baseUrl = "https://visit-counter.vercel.app/counter.png";

const updateImage = () => {
    console.log("Value Changed!");

    const isTransparentBg = $("#tranparentBg").is(":checked");
    const fontSize = $("#fontsize").val();
    const pageUrl = $("#pageurl").val();
    const counterColor = $("#color").val();
    const backgroundColor = isTransparentBg ? "00000000" : $("#backgroundcolor").val();
    const NoOfDigits = $("#noDigit").val();

    const counterUrlObj = new URL(baseUrl);
    counterUrlObj.searchParams.append("page", pageUrl);
    counterUrlObj.searchParams.append("s", fontSize);
    counterUrlObj.searchParams.append("c", counterColor.replace(/#/, ""));
    counterUrlObj.searchParams.append("bg", backgroundColor.replace(/#/, ""));
    counterUrlObj.searchParams.append("no", NoOfDigits);

    const counterURL = counterUrlObj.href;

    $(".preview img").attr("src", counterURL);
    if (isTransparentBg) {
        $("#backgroundcolor").prop("disabled", true);
        $("#backgroundcolor").parent().css("opacity", 0.4);
    } else {
        $("#backgroundcolor").prop("disabled", false);
        $("#backgroundcolor").parent().css("opacity", 1);
    }
    // const fontFamily = $("#fontfamily").val();
    // counterURL.searchParams.append("ff",fontFamily)
};

$("form input,form select").on("change", updateImage);
window.addEventListener("load", updateImage);
