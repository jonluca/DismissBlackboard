$(() => {
    //Get contents of iframe
    const wrapper = $("#mybbCanvas").contents().find("body");

    //Get all links to dismiss notifications
    let links = $(wrapper).find('[id^="dismiss"]');

    for (var i = 0; i < links.length; i++) {
        //Get dom element
        let link = $(links[i]).get(0);
        link.click();
    }
});