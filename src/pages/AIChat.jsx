import MainLayout from "../components/layout/MainLayout";
import PageContainer from "../components/layout/PageContainer";
import AIChatWindow from "../components/ai/AIChatWindow";

const AIChat = () => {
  return (
    <MainLayout>
      <PageContainer>
        <div className="ai-chat-page">
          <div className="ai-chat-page-header">
            <span className="section-eyebrow">AI travel assistant</span>

            <h1>
              Plan your journey
              <br />
              with AI.
            </h1>

            <p>
              Search buses, choose seats, and get booking assistance
              through a simple conversation.
            </p>
          </div>

          <AIChatWindow />
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default AIChat;