import shutil
import os

src_construction = r"C:\Users\User\.gemini\antigravity-ide\brain\a4028606-7cee-4887-aa1d-a9c96b36b5de\construction_trans_1779876310925.png"
dst_construction = r"d:\urban-blueprints\public\images\services\transportation\construction-generated.png"

src_design = r"C:\Users\User\.gemini\antigravity-ide\brain\a4028606-7cee-4887-aa1d-a9c96b36b5de\design_trans_1779876330904.png"
dst_design = r"d:\urban-blueprints\public\images\services\transportation\design-generated.png"

try:
    shutil.copy(src_construction, dst_construction)
    print("Successfully copied construction image")
except Exception as e:
    print(f"Error copying construction image: {e}")

try:
    shutil.copy(src_design, dst_design)
    print("Successfully copied design image")
except Exception as e:
    print(f"Error copying design image: {e}")
