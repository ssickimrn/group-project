document.addEventListener("DOMContentLoaded", () => {
    const recipes = document.querySelectorAll(".recipe");
    let currentRecipeIndex = 0;
    let autoScroll;
    let isAutoScrolling = true; // To track whether auto-scrolling is active

    const showRecipe = (index) => {
        recipes.forEach((recipe, i) => {
            if (i === index) {
                recipe.classList.add("active");
                recipe.classList.remove("hidden");
            } else {
                recipe.classList.remove("active");
                recipe.classList.add("hidden");
            }
        });
    };

    const scrollUp = () => {
        if (currentRecipeIndex > 0) {
            currentRecipeIndex--;
        } else {
            currentRecipeIndex = recipes.length - 1; // Loop back to the last recipe
        }
        showRecipe(currentRecipeIndex);
        resetAutoScroll();
    };

    const scrollDown = () => {
        if (currentRecipeIndex < recipes.length - 1) {
            currentRecipeIndex++;
        } else {
            currentRecipeIndex = 0; // Loop back to the first recipe
        }
        showRecipe(currentRecipeIndex);
        resetAutoScroll();
    };

    const resetAutoScroll = () => {
        if (isAutoScrolling) {
            clearInterval(autoScroll);
            autoScroll = setInterval(scrollDown, 5000); // Restart auto-scrolling
        }
    };

    // Stop auto-scroll and toggle state
    const toggleAutoScroll = () => {
        isAutoScrolling = !isAutoScrolling;
        if (isAutoScrolling) {
            autoScroll = setInterval(scrollDown, 5000);
        } else {
            clearInterval(autoScroll);
        }
    };

    // Event listener to stop/resume auto-scrolling on recipe click
    recipes.forEach((recipe) => {
        recipe.addEventListener("click", () => {
            toggleAutoScroll();
        });
    });

    // Handle touch gestures for smartphones
    let startY = 0;

    document.addEventListener("touchstart", (event) => {
        startY = event.touches[0].clientY;
    });

    document.addEventListener("touchmove", (event) => {
        const endY = event.touches[0].clientY;
        const deltaY = endY - startY;

        if (Math.abs(deltaY) > 50) { // Threshold to avoid accidental swipes
            if (deltaY > 0) {
                scrollUp(); // Swipe down to go to the previous recipe
            } else {
                scrollDown(); // Swipe up to go to the next recipe
            }
        }
    });

    // Initialize auto-scrolling
    autoScroll = setInterval(scrollDown, 5000);

    // Initialize the first recipe as visible
    showRecipe(currentRecipeIndex);
});
