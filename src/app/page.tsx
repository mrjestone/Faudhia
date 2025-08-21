import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, home, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(home.title)}`,
    path: home.path,
  });
}

export default function Home() {
  const structure = [
    {
      title: home.intro.title,
      display: home.intro.display,
      items: [],
    },
    {
      title: home.work.title,
      display: home.work.display,
      items: home.work.experiences.map((experience) => experience.company),
    },
    {
      title: home.studies.title,
      display: home.studies.display,
      items: home.studies.institutions.map((institution) => institution.name),
    },
    {
      title: home.certifications.title,
      display: home.certifications.display,
      items: home.certifications.certificates.map((cert) => cert.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={home.title}
        description={home.description}
        path={home.path}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${home.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {home.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={home} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {home.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={home.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {home.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={home.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Button
                          className="s-flex-hide"
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </React.Fragment>
                    )
                )}
              </Flex>
            )}
          </Column>

          {home.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {home.intro.description}
            </Column>
          )}

          {home.work.display && (
            <>
              <Heading
                as="h2"
                id={home.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {home.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {home.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                  >
                    <Flex
                      fillWidth
                      horizontal="space-between"
                      vertical="end"
                      marginBottom="4"
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        )
                      )}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex
                        fillWidth
                        paddingTop="m"
                        paddingLeft="40"
                        gap="12"
                        wrap
                      >
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {home.studies.display && (
            <>
              <Heading
                as="h2"
                id={home.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {home.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {home.studies.institutions.map((institution, index) => (
                  <Column
                    key={`${institution.name}-${index}`}
                    fillWidth
                    gap="4"
                  >
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {home.certifications.display && (
            <>
              <Heading
                as="h2"
                id={home.certifications.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {home.certifications.title}
              </Heading>
              <Column fillWidth gap="l">
                {home.certifications.certificates.map((cert, index) => (
                  <Column key={`${cert.title}-${index}`} fillWidth gap="4">
                    <Text id={cert.title} variant="heading-strong-l">
                      {cert.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {cert.issuer} • {cert.date}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {cert.description}
                    </Text>
                    {cert.image && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        <Flex
                          border="neutral-medium"
                          radius="m"
                          minWidth={cert.image.width}
                          height={cert.image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={cert.image.width.toString()}
                            alt={cert.image.alt}
                            src={cert.image.src}
                          />
                        </Flex>
                      </Flex>
                    )}
                    <Flex fillWidth gap="s" marginTop="s">
                      <Button
                        href={cert.pdfUrl}
                        variant="secondary"
                        size="s"
                        target="_blank"
                      >
                        Download PDF
                      </Button>
                      <Button
                        href={cert.credentialUrl}
                        variant="tertiary"
                        size="s"
                        target="_blank"
                      >
                        View Credential
                      </Button>
                    </Flex>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
