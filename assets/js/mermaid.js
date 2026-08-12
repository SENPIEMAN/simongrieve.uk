import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

window.mermaid = mermaid;

function getCSSVariable(name) {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
}

function getMermaidConfig() {
    return {
        startOnLoad: false,
        theme: "base",

        themeVariables: {
            background: getCSSVariable("--bg"),
            primaryColor: getCSSVariable("--card"),
            primaryTextColor: getCSSVariable("--muted"),
            primaryBorderColor: getCSSVariable("--button-border"),


            lineColor: getCSSVariable("--muted"),

            secondaryColor: getCSSVariable("--bg"),
            secondaryTextColor: getCSSVariable("--titles"),
            secondaryBorderColor: getCSSVariable("--border"),

            tertiaryColor: getCSSVariable("--button"),
            tertiaryTextColor: getCSSVariable("--titles"),
            tertiaryBorderColor: getCSSVariable("--muted"),

            fontFamily: "Inconsolata, monospace"
        }
    };
}

function getMermaidSource(source) {

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        return source.replace(
            /^(\s*flowchart\s+)LR\b/im,
            "$1TD"
        );
    }

    return source;
}

async function renderMermaid() {

    const codeBlocks = document.querySelectorAll(
        "pre code.language-mermaid"
    );

    codeBlocks.forEach((code) => {

        const pre = code.parentElement;

        const diagram = document.createElement("div");

        diagram.className = "mermaid";

        diagram.dataset.mermaidSource = code.textContent;

        diagram.textContent = code.textContent;

        pre.replaceWith(diagram);
    });

    const diagrams = document.querySelectorAll(".mermaid");

    if (!diagrams.length) {
        return;
    }

    mermaid.initialize(getMermaidConfig());

    diagrams.forEach((diagram) => {

        const source = diagram.dataset.mermaidSource;

        if (!source) {
            return;
        }

        diagram.innerHTML = "";

        diagram.textContent = getMermaidSource(source);

        diagram.removeAttribute("data-processed");
    });

    await mermaid.run({
        nodes: diagrams
    });
}

window.renderMermaid = renderMermaid;

renderMermaid();


// Re-render when the viewport crosses the mobile breakpoint
let previousMobileState = window.innerWidth <= 768;

window.addEventListener("resize", () => {

    const currentMobileState = window.innerWidth <= 768;

    if (currentMobileState !== previousMobileState) {

        previousMobileState = currentMobileState;

        renderMermaid();
    }
});