const job = {
    image: "",
    position: "",
    company: "",
    star: "",
    review: "",
    location: "",
    salary: "",
    date: ""
}

const jobList = [
    {
        image: "assets/company1.png",
        position: "Account Executive",
        company: "PT. Magna Solusi Indonesia",
        star: "4.8★",
        review: "324 reviews",
        location: "Location: South Jakarta, Indonesia",
        salary: "Salary: IDR 8.000.000 - IDR 12.500.000 / month",
        date: "Apply before 31 Dec"
    },
    {
        image: "assets/company2.png",
        position: "Account Executive",
        company: "PT. Magna Solusi Indonesia",
        star: "4.8★",
        review: "324 reviews",
        location: "Location: South Jakarta, Indonesia",
        salary: "Salary: IDR 8.000.000 - IDR 12.500.000 / month",
        date: "Apply before 31 Dec"
    },
    {
        image: "assets/company3.png",
        position: "Account Executive",
        company: "PT. Magna Solusi Indonesia",
        star: "4.8★",
        review: "324 reviews",
        location: "Location: South Jakarta, Indonesia",
        salary: "Salary: IDR 8.000.000 - IDR 12.500.000 / month",
        date: "Apply before 31 Dec"
    },
    {
        image: "assets/company4.png",
        position: "Account Executive",
        company: "PT. Magna Solusi Indonesia",
        star: "4.8★",
        review: "324 reviews",
        location: "Location: South Jakarta, Indonesia",
        salary: "Salary: IDR 8.000.000 - IDR 12.500.000 / month",
        date: "Apply before 31 Dec"
    },
    {
        image: "assets/company5.png",
        position: "Account Executive",
        company: "PT. Magna Solusi Indonesia",
        star: "4.8★",
        review: "324 reviews",
        location: "Location: South Jakarta, Indonesia",
        salary: "Salary: IDR 8.000.000 - IDR 12.500.000 / month",
        date: "Apply before 31 Dec"
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
                    <a class="job-company" href="companyoverview.html">${job.company}</a>
                    <div class="job-rating">
                        <div class="job-star">${job.star}</div>
                        <div class="job-review">${job.review}</div>
                    </div>
                </div>
            </div>
            <div class="job-desc">${job.location}</div>
            <div class="job-desc">${job.salary}</div>
            <div class="job-desc">${job.date}</div>
            <a class="button" href="signup.html"><button id="button2">Quick Apply</button></a>
        </div>
    `
    jobCont.innerHTML += html
});