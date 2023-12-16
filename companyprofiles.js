function toggle() {
    let nav = document.getElementById('nav-list')
    nav.classList.toggle('show')
}

const job = {
    comp: "",
    image: "",
    position: "",
    company: "",
    star: "",
    review: "",
    location: "",
    salary: "",
    level: "",
    speciality: "",
    industry: "",
    category1: "",
    category2: "",
    date: ""
}

const jobList = [
    {
        comp: "magna",
        image: "assets/company1.png",
        position: "Account Executive",
        company: "PT. Magna Solusi Indonesia",
        star: "4.8★",
        review: "324 reviews",
        location: "Location: South Jakarta, Indonesia",
        salary: "Salary: IDR 8.000.000 - IDR 12.500.000 / month",
        level: "Level: Director / Executive",
        speciality: "Speciality: Accounting and Finance",
        industry: "Industry: Information Technology / IT",
        category1: "Category: ",
        category2: "Full-time",
        date: "Apply before 31 Dec"
    },
    {
        comp: "royal",
        image: "assets/company2.png",
        position: "Telemarketing Associate",
        company: "PT. Royal Trust",
        star: "4.9★",
        review: "105 reviews",
        location: "Location: Surabaya, Indonesia",
        salary: "Salary: IDR 5.000.000 - IDR 7.500.000 / month",
        level: "Level: Associate / Supervisor",
        speciality: "Speciality: Sales and Marketing",
        industry: "Industry: Financial Services",
        category1: "Category: ",
        category2: "Full-time",
        date: "Apply before 31 Dec"
    },
    {
        comp: "avo",
        image: "assets/company3.png",
        position: "Account Executive",
        company: "AVO Innovation Technology",
        star: "4.3★",
        review: "219 reviews",
        location: "Location: Sleman, Indonesia",
        salary: "Salary: IDR 5.000.000 - IDR 7.000.000 / month",
        level: "Level: Director / Executive",
        speciality: "Speciality: Accounting and Finance",
        industry: "Industry: Beauty and Personal Care",
        category1: "Category: ",
        category2: "Full-time",
        date: "Apply before 31 Jan"
    },
    {
        comp: "avo",
        image: "assets/company3.png",
        position: "E Commerce Operation",
        company: "AVO Innovation Technology",
        star: "4.3★",
        review: "219 reviews",
        location: "Location: Sleman, Indonesia",
        salary: "Salary: IDR 5.000.000 - IDR 6.700.000 / month",
        level: "Level:  Entry Level / Junior",
        speciality: "Speciality: Management and Consultancy",
        industry: "Industry: Beauty and Personal Care",
        category1: "Category: ",
        category2: "Part-time",
        date: "Apply before 7 Dec"
    },
    {
        comp: "magna",
        image: "assets/company1.png",
        position: "Public Relation Officer",
        company: "PT. Magna Solusi Indonesia",
        star: "4.8★",
        review: "324 reviews",
        location: "Location: South Jakarta, Indonesia",
        salary: "Salary: IDR 3.000.000 - IDR 10.000.000 / month",
        level: "Level:  Entry Level / Junior",
        speciality: "Speciality: Sales and Marketing",
        industry: "Industry: Information Technology / IT",
        category1: "Category: ",
        category2: "Part-time",
        date: "Apply before 12 Jan"
    },
    {
        comp: "royal",
        image: "assets/company2.png",
        position: "Software Engineer",
        company: "PT. Royal Trust",
        star: "4.9★",
        review: "105 reviews",
        location: "Location: Surabaya, Indonesia",
        salary: "Salary: IDR 6.000.000 - IDR 8.750.000 / month",
        level: "Level: Entry Level / Junior",
        speciality: "Speciality: Sales and Marketing",
        industry: "Industry: Financial Services",
        category1: "Category: ",
        category2: "Remote",
        date: "Apply before 9 May"
    },
    {
        comp: "royal",
        image: "assets/company2.png",
        position: "Center Manager",
        company: "PT. Royal Trust",
        star: "4.9★",
        review: "105 reviews",
        location: "Location: Surabaya, Indonesia",
        salary: "Salary: IDR 5.000.000 - IDR 9.000.000 / month",
        level: "Level: Mid-Senior Level / Manager",
        speciality: "Speciality: Management and Consultancy",
        industry: "Industry: Financial Services",
        category1: "Category: ",
        category2: "Full-time",
        date: "Apply before 30 Dec"
    },
    {
        comp: "avo",
        image: "assets/company3.png",
        position: "Creative Graphic Designer",
        company: "AVO Innovation Technology",
        star: "4.3★",
        review: "219 reviews",
        location: "Location: Sleman, Indonesia",
        salary: "Salary: IDR 5.000.000 - IDR 12.000.000 / month",
        level: "Level:  Entry Level / Junior",
        speciality: "Speciality: Arts and Design",
        industry: "Industry: Beauty and Personal Care",
        category1: "Category: ",
        category2: "Freelance",
        date: "Apply before 31 Jan"
    },
    {
        comp: "magna",
        image: "assets/company1.png",
        position: "Marketing and Sales Head",
        company: "PT. Magna Solusi Indonesia",
        star: "4.8★",
        review: "324 reviews",
        location: "Location: South Jakarta, Indonesia",
        salary: "Salary: IDR 11.000.000 - IDR 14.000.000 / month",
        level: "Level: Director / Executive",
        speciality: "Speciality: Sales and Marketing",
        industry: "Industry: Information Technology / IT",
        category1: "Category: ",
        category2: "Full-time",
        date: "Apply before 12 Jan"
    }
]

let jobCont = document.getElementById("jobs")
jobList.forEach(job => {
    let html = `
        <div class="job">
            <div class="flex1">
                <img class="job-image" src="${job.image}" alt="">
                <div class="subflex1">
                    <div class="job-position">${job.position}</div>
                    <a id="comp" class="job-company" href="${job.comp}.html">${job.company}</a>
                    <div class="job-rating">
                        <div class="job-star">${job.star}</div>
                        <div class="job-review">${job.review}</div>
                    </div>
                </div>
            </div>
            <div class="job-desc">${job.location}</div>
            <div class="job-desc">${job.salary}</div>
            <div class="job-desc">${job.level}</div>
            <div class="job-desc">${job.speciality}</div>
            <div class="job-desc">${job.industry}</div>
            <div class="job-desc">
                <div class="job-category">
                        <div class="putih">${job.category1}</div>
                        <div class="oren">${job.category2}</div>
                </div>
            </div>
            <div class="job-desc">${job.date}</div>
            <a class="button" href="signup.html"><button id="button2">Quick Apply</button></a>
        </div>
    `
    jobCont.innerHTML += html
});