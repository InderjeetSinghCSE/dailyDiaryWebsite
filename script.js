function showContent(id) {
    var section = document.getElementById(id);
    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        // Hide all content sections
        var sections = document.querySelectorAll('.content-section');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the selected content section
        section.style.display = 'block';
    }
}