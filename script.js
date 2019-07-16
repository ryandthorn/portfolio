"use strict";
/** * Contact buttons ***/
$("#wrap__contacts").on("click", function(e) {
  e.preventDefault();
  switch (e.target.id) {
    case "email":
      const email = "ryandthorn@gmail.com";
      const subject = "Portfolio";
      document.location = `mailto:${email}?subject=${subject}`;
      break;
    case "github":
      const githubURL = "https://github.com/ryandthorn";
      window.open(githubURL, "_blank");
      break;
    case "linkedin":
      const linkedinURL = "https://www.linkedin.com/in/ryandthorn/";
      window.open(linkedinURL, "_blank");
      break;
  }
});
/** * Navigation bar ***/
$("#navigation").on("click", function(e) {
  e.preventDefault();
  switch (e.target.id) {
    case "nav-home":
      if ($("#home").hasClass("hidden")) {
        highlightNav("home");
        displayArea("home");
      }
      break;
    case "wrap-home":
      if ($("#home").hasClass("hidden")) {
        highlightNav("home");
        displayArea("home");
      }
      break;
    case "nav-about":
      if ($("#about").hasClass("hidden")) {
        highlightNav("about");
        displayArea("about");
      }
      break;
    case "wrap-about":
      if ($("#about").hasClass("hidden")) {
        highlightNav("about");
        displayArea("about");
      }
      break;
    case "nav-projects":
      if ($("#projects").hasClass("hidden")) {
        highlightNav("projects");
        displayArea("projects");
      }
      break;
    case "wrap-projects":
      if ($("#projects").hasClass("hidden")) {
        highlightNav("projects");
        displayArea("projects");
      }
      break;
  }
});
// Navigation bar - keyboard
$("#navigation").keypress(function(e) {
  if (e.which === 13) {
    $(`#${e.target.id}`).click();
  }
});
// Utilities
const displayArea = area => {
  $(".area").addClass("hidden");
  $(`#${area}`).removeClass("hidden");
};
const highlightNav = area => {
  $(".nav-link").removeClass("nav-active");
  $(`#nav-${area}`).addClass("nav-active");
};
/** * Project navigation ***/
$("#navigate-projects").click(function(e) {
  e.preventDefault();
  if (e.target.id === "previous") {
    const currentProject = $(".current");
    const previousProject = currentProject.prev();
    if (previousProject.length === 0) {
      const lastChild = $("#view-projects section").last();
      currentProject.toggleClass("hidden current");
      lastChild.toggleClass("hidden current");
    } else {
      currentProject.toggleClass("hidden current");
      previousProject.toggleClass("hidden current");
    }
  } else if (e.target.id === "next") {
    const currentProject = $(".current");
    const nextProject = currentProject.next();
    if (nextProject.length === 0) {
      const firstChild = $("#view-projects section").first();
      currentProject.toggleClass("hidden current");
      firstChild.toggleClass("hidden current");
    } else {
      currentProject.toggleClass("hidden current");
      nextProject.toggleClass("hidden current");
    }
  }
});
