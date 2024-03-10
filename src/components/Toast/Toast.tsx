// Toast.tsx
import { Button } from "../../stories/Button";
import React from "react";
import toast, { Toaster, useToaster } from "react-hot-toast";
import "./toaster.css";
import Image from "next/image";

export interface ToastProps {
  layout?: 'default' | 'flex';
  containerWidth: number;
  message: string;
  headerTextColor?: string;
  borderColor?: string;
  iconUrl?: string;
  fontWeight: number;
  fontSize: number;
  isShowBody?: boolean;
  body?: string;
  bodyTextColor?: string;
  isShowButton?: boolean;
  buttonBackgroundColor?: string;
  buttonText?: string;
  buttonBorderColor?: string;
  buttonTextColor?: string;
  closeIconColor?: string;
  onClick?: () => void;
}

export const Toast = ({
  containerWidth = 640,
  message,
  buttonBackgroundColor = "#FFFF00",
  buttonText = "Button Text",
  borderColor,
  headerTextColor= '#000',
  fontWeight = 400,
  fontSize = 14,
  iconUrl,
  body = "Hello world",
  bodyTextColor = headerTextColor,
  isShowBody = false,
  isShowButton = false,
  buttonBorderColor = "#000",
  buttonTextColor = "#000",
  closeIconColor = headerTextColor,
  layout = 'default',
  ...props
}: ToastProps) => {
  return (
    <>
      <div
        className="toaster-wrapper"
        style={{
          border: `1px solid ${borderColor}`,
          color: headerTextColor,
          fontWeight: fontWeight,
          fontSize: `${fontSize}px`,
          width: `${containerWidth}px`,
        }}
      >
        <div className="toaster-body-container">
          <div className="toast-header-container">
            <div className="toast-header">
              <div className="icon">
                {iconUrl && (
                  <Image
                    src={iconUrl}
                    alt={iconUrl}
                    width={32}
                    height={32}
                  />
                )}
              </div>
              <div className="message">{message}
              {layout === 'flex' && isShowBody && <div className="toast-body" style={{
            color: bodyTextColor
          }}>{body}</div>}

          {isShowButton && (
            <Button
              backgroundColor={buttonBackgroundColor}
              buttonBorderColor={buttonBorderColor}
              buttonTextColor={buttonTextColor}
              label={buttonText}
              onClick={() => {}}
              primary
            />
          )}
              </div>
            </div>

            <div className="close" style={{
                color: closeIconColor
            }}>X</div>
          </div>

          {layout === 'default' && isShowBody && <div className="toast-body" style={{
            color: bodyTextColor
          }}>{body}</div>
          }

          {layout === 'default' && isShowButton && (
            <Button
              backgroundColor={buttonBackgroundColor}
              buttonBorderColor={buttonBorderColor}
              buttonTextColor={buttonTextColor}
              label={buttonText}
              onClick={() => {}}
              primary
            />
          )}
        </div>
      </div>
    </>
  );
};
