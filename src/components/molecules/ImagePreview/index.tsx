import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import styled from 'styled-components';
import Image from 'next/image';
import { CloseIcon } from '@/components/atoms/IconButton';

const ImagePreviewContainer = styled(Box)`
  position: relative;
`;

const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 0 6px 0 6px;
  background-color: rgba(44, 44, 44, 0.66);
  cursor: pointer;
`;

interface ImagePreviewProps {
  /**
   * 画像URL
   */
  src: string;
  /**
   * 代替テキスト
   */
  alt: string;
  /**
   * 縦幅
   */
  height: number;
  /**
   * 横幅
   */
  width: number;
  /**
   * 削除ボタンを押した時のイベントハンドラ
   */
  onRemove?: (src: string) => void;
}

/**
 * イメージプレビュー
 */
const ImagePreview = (props: ImagePreviewProps) => {
  const { src, alt, height, width, onRemove } = props;

  // 閉じるボタンを押したらonRemoveを呼ぶ
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove && src && onRemove(src);

    return false;
  };

  return (
    <ImagePreviewContainer>
      <Image src={src} alt={alt} width={width} height={height} />
      <CloseBox alignItems='center' justifyContent='center' onClick={handleCloseClick}>
        <CloseIcon size={24} color='white' />
      </CloseBox>
    </ImagePreviewContainer>
  );
};

export default ImagePreview;
