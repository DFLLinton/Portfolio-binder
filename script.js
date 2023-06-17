const image1 = document.getElementById("image1");
  const image1file = document.getElementById("image1file");
  const image2 = document.getElementById("image2");
  const image2file = document.getElementById("image2file");
  const leftText = document.getElementById("leftText");
  const rightText = document.getElementById("rightText");

  const Paragraphs = {
    1: ' - Pair programming in a team of seven <br> developers deploying a new mobile <br> application.<br> - Integrating and designing twelve front-end <br> React components and APIs via Github,<br>prioritising principles of object oriented<br>programming.',
    2: ' - Managed web development for new Soho-based <br> Bar Kroketa.<br> - The process involved communicating in a<br>team of eight designers, entrepreneurs and<br>advertising executives to agree on a viable<br>digital presence.',
    3: ' - Created a product guide for small business,<br>King Louie’s Lab, displaying products.<br> - Extensive custom CSS such as multiple<br>cursors and on-hover illustrations, all<br>within a flexbox layout.',
    4: ` - Redesigned and reprogrammed client's<br>website applying a combination of JavaScript,<br>PHP, CSS, and HTML.<br> - After thorough testing, hosted it online<br>via the FTP back-end, ensuring a seamless<br>transition and optimal performance.`,
    5: ' - Developed own hypotheses and programmed<br>new experimental technique using Bonvision<br>interface.<br> - My paradigm has been adopted by subsequent<br>researchers at UCL demonstrating its<br>technical aptitude and versatility.',
    6: ' - Coded website for small, London-based<br>gardening business using React.js and CSS<br>animations.<br> - Client required simple functionality and<br>minimalistic aesthetic with a focus on<br>photography.',
  }

  function showImage(x) {
    const image1 = document.getElementById("image1");
  const image1file = document.getElementById("image1file");
  const image2 = document.getElementById("image2");
  const image2file = document.getElementById("image2file");
  const leftText = document.getElementById("leftText");
  const rightText = document.getElementById("rightText");
    if (x === "favourite") {
      image1.style.display = "block";
      image1file.src = "images/favanswer.jpg";
      leftText.innerHTML = Paragraphs[1];
    } else if (x === "kroketa") {
      image2.style.display = "block";
      image2file.src = "images/kroketa.jpg";
      rightText.innerHTML = Paragraphs[2];
    } else if (x === "vinos") {
      image2.style.display = "block";
      image2file.src = "images/vinos.jpg";
      rightText.innerHTML = Paragraphs[4];
    }else if (x === "gender") {
      image1.style.display = "block";
      image1file.src = "images/product.png";
      leftText.innerHTML = Paragraphs[3];
    }else if (x === "animacy") {
      image1.style.display = "block";
      image1file.src = "images/animacy.png";
      leftText.innerHTML = Paragraphs[5];
    } else if (x === "garden") {
      image2.style.display = "block";
      image2file.src = "images/garden.png";
      rightText.innerHTML = Paragraphs[6];
    }
  }
  function hideImage() {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    image1.style.display = "none";
    image2.style.display = "none";
  }