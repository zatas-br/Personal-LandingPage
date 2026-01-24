from playwright.sync_api import sync_playwright, expect

def verify_mobile_and_add_section(page):
    url = "http://localhost:3002/page-builder"
    print(f"Navigating to {url}...")
    page.goto(url)

    # Wait for sidebar to load
    expect(page.get_by_text("Page Builder", exact=True)).to_be_visible()

    # Check for "Add Section" button
    print("Clicking Add Section...")
    page.get_by_role("button", name="Add").click()

    # Expect Add Section Dialog
    expect(page.get_by_role("dialog")).to_be_visible()

    # Add Pricing Section
    print("Adding Pricing Section...")
    # Click the button inside the dialog
    page.get_by_role("button", name="Preços").click()

    # Wait for dialog to disappear
    expect(page.get_by_role("dialog")).not_to_be_visible()

    # Verify Pricing Section is added to Sidebar
    print("Verifying Pricing in Sidebar...")
    # Look for the sidebar item specifically. It has class "cursor-grab".
    # Or just count the items.
    # Let's try to find text inside the sidebar region.
    sidebar = page.locator("aside")
    expect(sidebar.get_by_text("Preços")).to_be_visible()

    # Switch to Mobile View
    print("Switching to Mobile View...")
    page.get_by_title("Mobile (375px)").click()
    page.wait_for_timeout(1000)

    # Take screenshot of Mobile View
    print("Taking screenshot...")
    page.screenshot(path="verification/mobile_add_section.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})
        try:
            verify_mobile_and_add_section(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()
