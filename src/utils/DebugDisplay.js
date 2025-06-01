/**
 * @fileoverview Utility class for displaying debug information on the screen.
 */

/**
 * Manages an HTML element to display debug text.
 */
export class DebugDisplay {
    /**
     * The HTML element used for displaying debug messages.
     * @type {HTMLElement | null}
     * @private
     */
    _displayElement = null;

    /**
     * Creates a new DebugDisplay instance.
     * @param {string} elementId The ID of the HTML element to use for display.
     */
    constructor(elementId) {
        this._displayElement = document.getElementById(elementId);
        if (!this._displayElement) {
            console.warn(`DebugDisplay: Element with ID "${elementId}" not found.`);
        }
    }

    /**
     * Updates the text content of the debug display.
     * @param {string} text The text to display.
     */
    update(text) {
        if (this._displayElement) {
            this._displayElement.textContent = text;
        }
    }

    /**
     * Clears the text content of the debug display.
     */
    clear() {
        if (this._displayElement) {
            this._displayElement.textContent = '';
        }
    }

    /**
     * Appends a new line of text to the debug display.
     * @param {string} text The text to append.
     */
    append(text) {
        if (this._displayElement) {
            this._displayElement.innerHTML += `${text}<br>`;
        }
    }

     /**
     * Sets the visibility of the debug display.
     * @param {boolean} visible True to show, false to hide.
     */
    setVisible(visible) {
        if (this._displayElement) {
            this._displayElement.style.display = visible ? 'block' : 'none';
        }
    }
}