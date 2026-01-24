from playwright.sync_api import sync_playwright, expect

def verify_page_builder(page):
    print("Navigating to Page Builder...")
    page.goto("http://localhost:3000/page-builder")

    # Wait for sidebar to load
    print("Waiting for sidebar...")
    expect(page.get_by_text("Page Builder", exact=True)).to_be_visible()

    # Check for Sections in Sidebar
    print("Checking for sections...")
    expect(page.get_by_text("Hero (Início)")).to_be_visible()

    # Click "Ver Código" on the first item (Header-1)
    print("Clicking View Code...")
    page.get_by_title("Ver Código").first.click()

    # Expect Code Viewer Dialog
    print("Waiting for Code Viewer...")
    expect(page.get_by_role("dialog")).to_be_visible()
    expect(page.get_by_text("Código:")).to_be_visible()

    # Close Dialog
    page.keyboard.press("Escape")
    expect(page.get_by_role("dialog")).not_to_be_visible()

    # Click "Editar Conteúdo"
    print("Clicking Edit Content...")
    # Pick the second one (Hero) to see inputs
    page.get_by_title("Editar Conteúdo").nth(1).click()

    # Expect Edit Dialog
    print("Waiting for Edit Dialog...")
    expect(page.get_by_role("dialog")).to_be_visible()
    expect(page.get_by_text("Editar")).to_be_visible()

    # Check if inputs exist using text match for the Label
    expect(page.get_by_text("Badge", exact=True)).to_be_visible()

    # Take screenshot of Edit Dialog as final proof
    print("Taking screenshot...")
    page.screenshot(path="verification/final_proof.png")

    # Close
    page.keyboard.press("Escape")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})
        try:
            verify_page_builder(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()
