const certificate_course = [
    { course_name: 'School Byte', course_details: 'Course Curriculum for (ICSE/CBSE & WBBSE), Logo, Windows, MS-Word, MS-PowerPoint, MS-Excel, HTML', course_duration: '12 months' },
    { course_name: 'MS-Office', course_details: 'Basic of Windows, MS-Word, MS-Powerpoint, MS-Excel, MS-Access', course_duration: '4 months' },
    { course_name: 'FA', course_details: 'MS-Word, MS-Excel, Tally 9.0', course_duration: '6 months' },
    { course_name: 'DFA', course_details: 'MS-Word, MS-Excel, Tally 9.0, Expert, Ace', course_duration: '8 months' },
    { course_name: 'DDTP', course_details: 'PageMaker, Corel Draw, Corel Photo Paint, Photoshop', course_duration: '6 months' },
    { course_name: 'DCA', course_details: 'Windows, Windows Explorer, Command Prompt, MS-Word, MS-Powerpoint, MS-Excel, MS-Access', course_duration: '6 months' },
    { course_name: 'Language', course_details: 'C++, Foxpro(Database)', course_duration: '3 months' },
    { course_name: 'Multimedia(Basic)', course_details: 'Photoshop, Macromedia Flash, CyberLink Power Director', course_duration: '3 months' },
    { course_name: 'ADCA', course_details: 'Windows, Windows Explorer, Command Prompt, MS-Word, MS-Powerpoint, MS-Excel, MS-Access, Visual Basic, HTML, Foxpro', course_duration: '12 months' }
];

const coursesContainer = document.querySelector('.courses');

certificate_course.forEach((certificate_course) => {
    const course_container = document.createElement('div');
    course_container.classList.add('course-container');
    course_container.innerHTML = `
        <h2>${certificate_course.course_name}</h2>
        <p>${certificate_course.course_details}</p>
        <h4>${certificate_course.course_duration}</h4>
    `;
    coursesContainer.appendChild(course_container);
});


// const non_certificate_course = [
//     { course_name: 'School Byte', course_details: 'Course Curriculum for (ICSE/CBSE & WBBSE), Logo, Windows, MS-Word, MS-PowerPoint, MS-Excel, HTML', course_duration: '12 months' },
//     { course_name: 'School Byte', course_details: 'Course Curriculum for (ICSE/CBSE & WBBSE), Logo, Windows, MS-Word, MS-PowerPoint, MS-Excel, HTML', course_duration: '12 months' },
//     { course_name: 'School Byte', course_details: 'Course Curriculum for (ICSE/CBSE & WBBSE), Logo, Windows, MS-Word, MS-PowerPoint, MS-Excel, HTML', course_duration: '12 months' }
// ];

// const non_coursesContainer = document.querySelector('.ncourses');

// non_certificate_course.forEach((non_certificate_course) => {
//     const ncourse_container = document.createElement('div');
//     ncourse_container.classList.add('non-certificate-course-container');
//     ncourse_container.innerHTML = `
//         <h2>${non_certificate_course.course_name}</h2>
//         <p>${non_certificate_course.course_details}</p>
//         <h4>${non_certificate_course.course_duration}</h4>
//     `;
//     non_coursesContainer.appendChild(ncourse_container);
// });