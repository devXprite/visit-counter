/* eslint-disable no-undef */
// const baseUrl = "http://localhost:3000/counter.png";
const baseUrl = "https://visit-counter.vercel.app/counter.png";

const notyf = new Notyf({ duration: 1000, position: { y: "top" } });

new ClipboardJS(".results input", {
    target: (trigger) => trigger,
}).on("success", (e) => {
    notyf.success("Sucessfully Copied to clipbaord!");
    console.log("copied!");
    e.clearSelection();
});

const updateImage = () => {
    console.log("Value Changed!");

    const isTransparentBg = $("#tranparentBg").is(":checked");
    const fontSize = $("#fontsize").val();
    const pageUrl = $("#pageurl").val();
    const counterColor = $("#color").val();
    const backgroundColor = isTransparentBg ? "00000000" : $("#backgroundcolor").val();
    const NoOfDigits = $("#noDigit").val();
    const fontFamily = $("#fontfamily").val();
    const textBeforeCounter = $("#textBeforeCounter").val();
    const textAfterCounter = $("#textAfterCounter").val();

    const counterUrlObj = new URL(baseUrl);
    counterUrlObj.searchParams.append("page", pageUrl);
    counterUrlObj.searchParams.append("s", fontSize);
    counterUrlObj.searchParams.append("c", counterColor.replace(/#/, ""));
    counterUrlObj.searchParams.append("bg", backgroundColor.replace(/#/, ""));
    counterUrlObj.searchParams.append("no", NoOfDigits);
    counterUrlObj.searchParams.append("ff", fontFamily);
    counterUrlObj.searchParams.append("tb", textBeforeCounter);
    counterUrlObj.searchParams.append("ta", textAfterCounter);

    const counterURL = counterUrlObj.href;
    const markdownCode = `![visits](${counterURL})`;
    const htmlCode = `<img src="${counterURL}" alt="visits">`;

    $(".preview img").attr("src", counterURL);
    $("#markdown").val(markdownCode);
    $("#html").val(htmlCode);
    $("#imgurl").val(counterURL);

    if (isTransparentBg) {
        $("#backgroundcolor").prop("disabled", true);
        $("#backgroundcolor").parent().css("opacity", 0.4);
    } else {
        $("#backgroundcolor").prop("disabled", false);
        $("#backgroundcolor").parent().css("opacity", 1);
    }
};

$("form input,form select").on("change", updateImage);
window.addEventListener("load", updateImage);
