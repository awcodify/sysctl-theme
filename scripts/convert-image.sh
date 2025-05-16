#!/bin/bash
# filepath: /Users/awcodify/Documents/Playground/sysctl.id/arsxy-theme/scripts/generate_webp.sh
# Script to convert JPG and PNG images to WebP format

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "cwebp is not installed. Please install it first."
    echo "macOS: brew install webp"
    echo "Ubuntu: sudo apt-get install webp"
    exit 1
fi

# Directory containing images
IMAGE_DIR="assets/images"
# Quality setting for WebP conversion (0-100)
QUALITY=80

# Create WebP versions of JPG and PNG images if they don't exist (excluding favicon folder)
find "$IMAGE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -not -path "*/favicon/*" -print0 | while IFS= read -r -d $'\0' file; do
    webp_file="${file%.*}.webp"
    
    # Check if WebP file exists and is newer than the source file
    if [ ! -f "$webp_file" ] || [ "$file" -nt "$webp_file" ]; then
        echo "Converting $file to $webp_file"
        cwebp -quiet -q "$QUALITY" "$file" -o "$webp_file"
    fi
done

# Also handle responsive images
RESPONSIVE_DIR="assets/images/responsive"
if [ -d "$RESPONSIVE_DIR" ]; then
    find "$RESPONSIVE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -not -path "*/favicon/*" -print0 | while IFS= read -r -d $'\0' file; do
        webp_file="${file%.*}.webp"
        
        # Check if WebP file exists and is newer than the source file
        if [ ! -f "$webp_file" ] || [ "$file" -nt "$webp_file" ]; then
            echo "Converting $file to $webp_file"
            cwebp -quiet -q "$QUALITY" "$file" -o "$webp_file"
        fi
    done
fi

# remove orignal images
find "$IMAGE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -not -path "*/favicon/*" -print0 | while IFS= read -r -d $'\0' file; do
    rm "$file"
done

# Move WebP files to the original location
find "$IMAGE_DIR" -type f \( -name "*.webp" \) -not -path "*/favicon/*" -print0 | while IFS= read -r -d $'\0' file; do
    mv "$file" "${file%.*}.webp"
done

echo "WebP conversion complete"
