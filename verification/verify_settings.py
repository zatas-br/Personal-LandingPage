from playwright.sync_api import Page, expect, sync_playwright

def verify_settings_dialog(page: Page):
    # 1. Arrange: Go to the homepage.
    page.goto("http://localhost:3000")

    # 2. Act: Find the "Editar site" button and click it.
    # It is visible by default.
    settings_btn = page.get_by_label("Editar site")
    expect(settings_btn).to_be_visible()
    settings_btn.click()

    # 3. Assert: Verify the dialog is open.
    # We look for the title "Configurações do Template"
    dialog_title = page.get_by_role("heading", name="Configurações do Template")
    expect(dialog_title).to_be_visible()

    # Wait a bit for animation
    page.wait_for_timeout(1000)

    # 4. Screenshot
    page.screenshot(path="verification/settings_dialog.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 720})
        try:
            verify_settings_dialog(page)
        finally:
            browser.close()
