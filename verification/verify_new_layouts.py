from playwright.sync_api import sync_playwright

def verify_new_layouts():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # 1. Page Builder (Color Picker & Sidebar)
            print("Verifying Page Builder...")
            page.goto("http://localhost:3000/page-builder")
            page.wait_for_selector("text=Cores do Tema")
            page.screenshot(path="verification/page_builder_updated.png")

            # 2. Blog Layouts
            print("Verifying Blog Layouts...")
            page.goto("http://localhost:3000/blog")
            page.click("text=Masonry")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/blog_masonry.png")

            page.click("text=Com Sidebar")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/blog_sidebar.png")

            page.click("text=Magazine")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/blog_magazine.png")

            # 3. Profile Layouts
            print("Verifying Profile Layouts...")
            page.goto("http://localhost:3000/profile")
            page.click("text=Simple")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/profile_simple.png")

            page.click("text=Cover")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/profile_cover.png")

            page.click("text=Split")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/profile_split.png")

            # 4. Pricing Layouts
            print("Verifying Pricing Layouts...")
            page.goto("http://localhost:3000/pricing")
            page.click("text=Cards")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/pricing_cards.png")

            page.click("text=Table")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/pricing_table.png")

            page.click("text=Checkout Flow")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/checkout_flow.png")

            print("All verifications complete.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_new_layouts()
