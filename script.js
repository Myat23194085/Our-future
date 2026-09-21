/* =====================================================
   CURRENT SCREEN
===================================================== */

let currentScreen = 1;


/*
   Store proposal timers so going back
   cannot accidentally trigger an old animation.
*/

let proposalTimers = [];


/* =====================================================
   CHANGE SCREEN
===================================================== */

function nextScreen(number) {

    const current =
        document.getElementById(
            "screen" + currentScreen
        );

    const next =
        document.getElementById(
            "screen" + number
        );


    if (!next) {
        return;
    }


    /*
       Hide current screen.
    */

    if (current) {

        current.classList.remove(
            "active"
        );

    }


    /*
       Show requested screen.
    */

    next.classList.add(
        "active"
    );


    /*
       Start each chapter at its top.
    */

    next.scrollTop = 0;


    currentScreen = number;


    /*
       Reset proposal every time
       the proposal chapter is opened.
    */

    if (number === 3) {

        resetMarriageProposal();

    }

}


/* =====================================================
   CLEAR PROPOSAL TIMERS
===================================================== */

function clearProposalTimers() {

    proposalTimers.forEach(
        function (timer) {

            clearTimeout(timer);

        }
    );


    proposalTimers = [];

}


/* =====================================================
   RESET PROPOSAL
===================================================== */

function resetMarriageProposal() {

    clearProposalTimers();


    const intro =
        document.getElementById(
            "proposalIntro"
        );

    const proposal =
        document.getElementById(
            "actualProposal"
        );

    const yes =
        document.getElementById(
            "proposalYes"
        );

    const talk =
        document.getElementById(
            "proposalTalk"
        );

    const ringBox =
        document.getElementById(
            "realRingBox"
        );

    const button =
        document.getElementById(
            "openRingButton"
        );


    if (intro) {

        intro.style.display =
            "block";

        intro.style.opacity =
            "1";

    }


    if (proposal) {

        proposal.classList.remove(
            "show"
        );

    }


    if (yes) {

        yes.classList.remove(
            "show"
        );

    }


    if (talk) {

        talk.classList.remove(
            "show"
        );

    }


    if (ringBox) {

        ringBox.classList.remove(
            "open"
        );

    }


    if (button) {

        button.disabled = false;

        button.textContent =
            "Open It 💍";

        button.style.opacity =
            "1";

    }

}


/* =====================================================
   OPEN RING BOX
===================================================== */

function openRealRing() {

    const ringBox =
        document.getElementById(
            "realRingBox"
        );

    const intro =
        document.getElementById(
            "proposalIntro"
        );

    const proposal =
        document.getElementById(
            "actualProposal"
        );

    const button =
        document.getElementById(
            "openRingButton"
        );


    if (!ringBox) {
        return;
    }


    /*
       Prevent double-clicking.
    */

    if (ringBox.classList.contains("open")) {
        return;
    }


    if (button) {

        button.disabled = true;

        button.textContent =
            "For You ❤️";

        button.style.opacity =
            "0.75";

    }


    /*
       Stage 1:
       Move the box slightly forward
       and open the lid.
    */

    ringBox.classList.add(
        "open"
    );


    /*
       Stage 2:
       Give her time to see the ring.
       Then softly fade the intro.
    */

    const fadeTimer =
        setTimeout(
            function () {

                if (intro) {

                    intro.style.transition =
                        "opacity 0.9s ease";

                    intro.style.opacity =
                        "0";

                }

            },
            3300
        );


    /*
       Stage 3:
       Reveal the actual proposal.
    */

    const questionTimer =
        setTimeout(
            function () {

                if (intro) {

                    intro.style.display =
                        "none";

                    intro.style.opacity =
                        "1";

                }


                if (proposal) {

                    proposal.classList.add(
                        "show"
                    );

                }

            },
            4300
        );


    proposalTimers.push(
        fadeTimer,
        questionTimer
    );

}


/* =====================================================
   YES ❤️
===================================================== */

function marriageYes() {

    clearProposalTimers();


    const proposal =
        document.getElementById(
            "actualProposal"
        );

    const yes =
        document.getElementById(
            "proposalYes"
        );


    if (proposal) {

        proposal.classList.remove(
            "show"
        );

    }


    if (yes) {

        yes.classList.add(
            "show"
        );

    }

}


/* =====================================================
   LET'S TALK ABOUT IT
===================================================== */

function marriageTalk() {

    clearProposalTimers();


    const proposal =
        document.getElementById(
            "actualProposal"
        );

    const talk =
        document.getElementById(
            "proposalTalk"
        );


    if (proposal) {

        proposal.classList.remove(
            "show"
        );

    }


    if (talk) {

        talk.classList.add(
            "show"
        );

    }

}


/* =====================================================
   RETURN TO PROPOSAL QUESTION
===================================================== */

function returnToProposal() {

    const proposal =
        document.getElementById(
            "actualProposal"
        );

    const talk =
        document.getElementById(
            "proposalTalk"
        );


    if (talk) {

        talk.classList.remove(
            "show"
        );

    }


    if (proposal) {

        proposal.classList.add(
            "show"
        );

    }

}


/* =====================================================
   LOVE LETTER
===================================================== */

function openLetter() {

    const letter =
        document.getElementById(
            "loveLetter"
        );

    const button =
        document.getElementById(
            "openLetterButton"
        );


    if (!letter) {
        return;
    }


    letter.classList.add(
        "show"
    );


    if (button) {

        button.textContent =
            "For You ❤️";

    }


    /*
       Scroll only inside this chapter.
    */

    setTimeout(
        function () {

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        },
        150
    );

}


/* =====================================================
   FINAL PROMISE
===================================================== */

function showPromise() {

    const promise =
        document.getElementById(
            "finalPromise"
        );


    if (!promise) {
        return;
    }


    promise.classList.add(
        "show"
    );


    setTimeout(
        function () {

            promise.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        },
        150
    );

}


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Prevent the whole website
           from becoming one long scroll.
        */

        document.body.style.overflow =
            "hidden";


        /*
           Always begin from chapter 1.
        */

        currentScreen = 1;


        const firstScreen =
            document.getElementById(
                "screen1"
            );


        if (firstScreen) {

            firstScreen.classList.add(
                "active"
            );

            firstScreen.scrollTop = 0;

        }

    }
);