import React, { useEffect, useRef, useState } from 'react';
import {
  Upload,
  X,
  Image as ImageIcon,
  Trash2,
  Check,
  Link as LinkIcon,
  Sparkles,
} from 'lucide-react';

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  onSavePhoto: (photoDataUrl: string | null) => void;
}

export const PhotoUploaderModal: React.FC<PhotoUploaderModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto,
}) => {
  const [preview, setPreview] = useState<string | null>(currentPhoto);
  const [isDragging, setIsDragging] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  /* Sync preview whenever modal opens/current photo changes */
  useEffect(() => {
    if (isOpen) {
      setPreview(currentPhoto);
      setImageUrlInput('');
      setErrorMsg('');
      setIsDragging(false);
    }
  }, [isOpen, currentPhoto]);

  if (!isOpen) return null;

  /* ================= FILE HANDLER ================= */

  const handleFile = (file: File) => {
    setErrorMsg('');

    if (!file.type.startsWith('image/')) {
      setErrorMsg(
        'Invalid file. Please select a JPG, PNG, WEBP, or other image file.'
      );
      return;
    }

    /* 10MB limit */
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('Image is too large. Maximum file size is 10MB.');
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result;

      if (typeof result === 'string') {
        setPreview(result);
        setErrorMsg('');
      }
    };

    reader.onerror = () => {
      setErrorMsg('Could not read this image. Please try another file.');
    };

    reader.readAsDataURL(file);
  };

  /* ================= DROP ================= */

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      handleFile(file);
    }
  };

  /* ================= URL ================= */

  const handleApplyUrl = () => {
    const url = imageUrlInput.trim();

    if (!url) {
      setErrorMsg('Please enter an image URL.');
      return;
    }

    try {
      const parsedUrl = new URL(url);

      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error();
      }

      setPreview(url);
      setImageUrlInput('');
      setErrorMsg('');
    } catch {
      setErrorMsg('Please enter a valid image URL.');
    }
  };

  /* ================= SAVE ================= */

  const handleSave = () => {
    setIsSaving(true);

    /*
     * Small delay gives the button a polished saving state.
     * The actual save remains local and immediate.
     */
    setTimeout(() => {
      onSavePhoto(preview);
      setIsSaving(false);
      onClose();
    }, 250);
  };

  /* ================= RESET ================= */

  const handleReset = () => {
    setPreview(null);
    setErrorMsg('');
    onSavePhoto(null);
    onClose();
  };

  /* ================= REMOVE PREVIEW ================= */

  const handleRemovePreview = () => {
    setPreview(null);
    setErrorMsg('');
  };

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/70
        p-4
        backdrop-blur-xl
        animate-in fade-in duration-300
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

      {/* ================= MODAL ================= */}

      <div
        className="
          relative
          w-full max-w-lg
          overflow-hidden
          rounded-3xl
          border border-white/[0.10]
          bg-[#070b14]/95
          shadow-[0_30px_120px_rgba(0,0,0,0.65)]
          backdrop-blur-2xl
          animate-in
          zoom-in-[0.97]
          duration-300
        "
      >
        {/* Top glow */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-blue-400/20
                bg-blue-500/[0.08]
              "
            >
              <ImageIcon className="h-5 w-5 text-blue-400" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-white">
                  Profile Photo
                </h3>

                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              </div>

              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                Personalize your portfolio
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              border border-white/[0.06]
              bg-white/[0.025]
              text-neutral-500
              transition-all duration-300
              hover:border-white/[0.12]
              hover:bg-white/[0.06]
              hover:text-white
            "
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* ================= BODY ================= */}

        <div className="space-y-5 p-6">

          <div>
            <p className="text-sm leading-6 text-neutral-300">
              Upload a professional portrait to display across your portfolio.
            </p>

            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-600">
              JPG / PNG / WEBP · Maximum 10MB
            </p>
          </div>

          {/* ================= UPLOAD AREA ================= */}

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragEnter={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`
              group
              relative
              min-h-[230px]
              cursor-pointer
              overflow-hidden
              rounded-2xl
              border
              transition-all duration-300
              ${
                isDragging
                  ? `
                    border-blue-400/60
                    bg-blue-500/[0.08]
                    shadow-[0_0_40px_rgba(59,130,246,0.10)]
                  `
                  : `
                    border-white/[0.08]
                    bg-white/[0.018]
                    hover:border-blue-400/30
                    hover:bg-white/[0.03]
                  `
              }
            `}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  handleFile(file);
                }

                e.target.value = '';
              }}
            />

            {/* Decorative grid */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                opacity-[0.025]
              "
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {preview ? (
              /* ================= PREVIEW ================= */
              <div className="relative flex h-full min-h-[230px] flex-col items-center justify-center p-6">
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute -inset-5 rounded-full bg-blue-500/[0.12] blur-2xl" />

                  <img
                    src={preview}
                    alt="Profile preview"
                    className="
                      relative
                      h-36 w-36
                      rounded-full
                      border-2 border-blue-400/40
                      object-cover
                      shadow-[0_0_35px_rgba(59,130,246,0.18)]
                    "
                    onError={() => {
                      setErrorMsg(
                        'This image could not be loaded. Please choose another image.'
                      );
                    }}
                  />

                  {/* Status */}
                  <div
                    className="
                      absolute
                      bottom-1
                      right-1
                      flex h-7 w-7
                      items-center justify-center
                      rounded-full
                      border-2 border-[#070b14]
                      bg-emerald-500
                      shadow-lg
                    "
                  >
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <p className="text-sm font-medium text-white">
                    Photo ready
                  </p>

                  <p className="mt-1 text-xs text-neutral-500">
                    Click anywhere to replace
                  </p>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemovePreview();
                  }}
                  className="
                    absolute
                    right-4
                    top-4
                    flex h-8 w-8
                    items-center justify-center
                    rounded-lg
                    border border-white/[0.08]
                    bg-black/30
                    text-neutral-500
                    backdrop-blur-md
                    transition-all
                    hover:border-rose-400/30
                    hover:bg-rose-500/10
                    hover:text-rose-400
                  "
                  aria-label="Remove preview"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              /* ================= EMPTY STATE ================= */
              <div className="relative flex min-h-[230px] flex-col items-center justify-center px-6 text-center">
                <div
                  className="
                    mb-5
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    border border-blue-400/15
                    bg-blue-500/[0.07]
                    text-blue-400
                    transition-all duration-300
                    group-hover:border-blue-400/30
                    group-hover:bg-blue-500/[0.12]
                    group-hover:scale-105
                  "
                >
                  <Upload className="h-6 w-6" />
                </div>

                <p className="font-display text-sm font-semibold text-white">
                  Drop your photo here
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  or click to browse from your device
                </p>

                <div className="mt-5 flex items-center gap-2">
                  {['PNG', 'JPG', 'WEBP'].map((format) => (
                    <span
                      key={format}
                      className="
                        rounded-md
                        border border-white/[0.06]
                        bg-white/[0.025]
                        px-2 py-1
                        font-mono text-[8px]
                        tracking-wider
                        text-neutral-600
                      "
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Error */}
          {errorMsg && (
            <div
              className="
                rounded-xl
                border border-rose-400/15
                bg-rose-500/[0.05]
                px-4 py-3
              "
            >
              <p className="text-xs leading-5 text-rose-400">
                {errorMsg}
              </p>
            </div>
          )}

          {/* ================= URL INPUT ================= */}

          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="h-px flex-1 bg-white/[0.06]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-700">
                OR USE URL
              </span>

              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="flex gap-2">
              <div
                className="
                  relative flex-1
                  rounded-xl
                  border border-white/[0.08]
                  bg-black/20
                  transition-all
                  focus-within:border-blue-400/30
                  focus-within:bg-blue-500/[0.025]
                "
              >
                <LinkIcon
                  className="
                    absolute left-3
                    top-1/2
                    h-3.5 w-3.5
                    -translate-y-1/2
                    text-neutral-600
                  "
                />

                <input
                  type="url"
                  value={imageUrlInput}
                  onChange={(e) => {
                    setImageUrlInput(e.target.value);
                    setErrorMsg('');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleApplyUrl();
                    }
                  }}
                  placeholder="https://example.com/photo.jpg"
                  className="
                    h-11 w-full
                    bg-transparent
                    pl-9 pr-3
                    text-xs
                    text-neutral-200
                    placeholder:text-neutral-700
                    outline-none
                  "
                />
              </div>

              <button
                type="button"
                onClick={handleApplyUrl}
                className="
                  rounded-xl
                  border border-white/[0.08]
                  bg-white/[0.04]
                  px-4
                  font-mono text-[9px]
                  uppercase tracking-wider
                  text-neutral-300
                  transition-all
                  hover:border-blue-400/30
                  hover:bg-blue-500/[0.08]
                  hover:text-white
                "
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div
          className="
            flex items-center
            justify-between
            border-t border-white/[0.06]
            bg-black/[0.12]
            px-6 py-4
          "
        >
          {/* Reset */}
          {preview ? (
            <button
              type="button"
              onClick={handleReset}
              className="
                group
                inline-flex
                items-center gap-2
                font-mono text-[9px]
                uppercase tracking-[0.12em]
                text-neutral-600
                transition-colors
                hover:text-rose-400
              "
            >
              <Trash2
                className="
                  h-3.5 w-3.5
                  transition-transform
                  group-hover:scale-110
                "
              />

              Reset
            </button>
          ) : (
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-700">
              PROFILE / 001
            </span>
          )}

          <div className="flex items-center gap-2">
            {/* Cancel */}
            <button
              type="button"
              onClick={onClose}
              className="
                rounded-xl
                border border-white/[0.07]
                bg-white/[0.025]
                px-4 py-2.5
                font-mono text-[9px]
                uppercase tracking-wider
                text-neutral-400
                transition-all
                hover:border-white/[0.12]
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              Cancel
            </button>

            {/* Save */}
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="
                group
                relative
                inline-flex
                items-center
                gap-2
                overflow-hidden
                rounded-xl
                border border-blue-400/20
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                px-5 py-2.5
                font-mono text-[9px]
                font-bold
                uppercase tracking-wider
                text-[#020617]
                shadow-[0_10px_30px_rgba(59,130,246,0.16)]
                transition-all duration-300
                hover:from-blue-400
                hover:to-cyan-300
                active:scale-[0.97]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-white/20
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              {isSaving ? (
                <>
                  <span
                    className="
                      h-3.5 w-3.5
                      animate-spin
                      rounded-full
                      border-2
                      border-[#020617]/30
                      border-t-[#020617]
                    "
                  />

                  Saving
                </>
              ) : (
                <>
                  <Check className="relative h-3.5 w-3.5" />

                  Save Photo
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};