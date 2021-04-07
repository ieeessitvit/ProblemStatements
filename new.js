const statements = [
    "This is a problem statement. How would you solve this?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla tempora nesciunt culpa tenetur repellat veniam necessitatibus odio, expedita aliquam, neque vero id impedit quibusdam natus delectus obcaecati molestias! Eos, reprehenderit!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla tempora nesciunt culpa tenetur repellat veniam necessitatibus odio, expedita aliquam, neque vero id impedit quibusdam natus delectus obcaecati molestias! Eos, reprehenderit!This is a problem statement. How would you solve this?",
    "This is a problem statement. How would you solve this? Implement what you have come up with",
    "This is a problem statement in the doman of bla bla bla and theme of bla bla bla. How would you solve this?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla tempora nesciunt culpa tenetur repellat veniam necessitatibus odio, expedita aliquam, neque vero id impedit quibusdam natus delectus obcaecati molestias! Eos, reprehenderit! This is a problem statement. How would you solve this?",
    "In every hackathon you get a problem statement. This is a problem statement. How would you solve this?",
    "This is a problem statement. How would you solve this?",
    "This is a problem statement. How would you solve this?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla tempora nesciunt culpa tenetur repellat veniam necessitatibus odio, expedita aliquam, neque vero id impedit quibusdam natus delectus obcaecati molestias! Eos, reprehenderit!This is a problem statement. How would you solve this?",
    "This is a problem statement. How would you solve this?",
    "This is a problem statement. How would you solve this?",
    "This is a problem statement. How would you solve this?",
];

const container = document.getElementById("container");

window.onload = () => {
    statements.forEach((st, i) => {
        var div = document.createElement("div");
        div.classList.add("statement");
        if (i % 2 == 0) {
            div.classList.add("blue");
        } else {
            div.classList.add("red");
        }

        let index = i + 1;
        if (i < 10) {
            index = "0" + index;
        }
        div.innerHTML = `
        <span class="index">${i + 1}</span>
        <div class="problem">${st}</div>
        <span class="big">${index}</span>
        `;
        container.appendChild(div);
    });
};
